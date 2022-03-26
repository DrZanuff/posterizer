import { useState, useCallback, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'

import { useSelector, useDispatch } from 'react-redux'
import { setNexturl } from '../../redux/nexturlSlice'
import { setPosts } from '../../redux/postsSlice'
import type { RootState } from '../../redux/store'

import { sortPostArrayByDate } from '../../utils/sortArrayDate'
import { Comment } from './Comment'
import { CommentModal, DeleteModal } from './Modal'
import { getPosts } from '../../actions/api'
import * as S from './styles'

export function CommentsSection() {
  const dispatch = useDispatch()
  const nextUrl = useSelector((state: RootState) => state.nexturl.url)
  const postsList = useSelector((state: RootState) => state.postlist.posts)

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isLoadingMorePosts, setIsLoadingMorePosts] = useState(false)

  useEffect(() => {
    async function getInitialPosts() {
      const response = await getPosts('')

      if (response) {
        dispatch(setNexturl(String(response.next)))
        const results = response.results
        dispatch(setPosts([...postsList, ...results]))
      }
    }

    getInitialPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadMorePosts = useCallback(async () => {
    setIsLoadingMorePosts(true)
    const endPoint = `?${String(nextUrl?.split('?')[1])}`
    const response = await getPosts(endPoint)

    if (response) {
      dispatch(setNexturl(String(response.next)))
      const results = response.results
      dispatch(setPosts(sortPostArrayByDate([...postsList, ...results])))
    }

    setIsLoadingMorePosts(false)
  }, [dispatch, nextUrl, postsList])

  return (
    <S.CommentsSection>
      <S.CommentsScroll>
        {postsList.map((post) => (
          <Comment
            key={post.id}
            toggleCommentModal={setIsCommentModalOpen}
            toogleDeleteModal={setIsDeleteModalOpen}
            {...post}
          />
        ))}
        {nextUrl !== null && (
          <LoadingButton
            loading={isLoadingMorePosts}
            variant="contained"
            onClick={() => loadMorePosts()}
          >
            Load more Posts
          </LoadingButton>
        )}
      </S.CommentsScroll>
      <S.Mask />
      {isCommentModalOpen && (
        <CommentModal handleClose={setIsCommentModalOpen} />
      )}
      {isDeleteModalOpen && <DeleteModal handleClose={setIsDeleteModalOpen} />}
    </S.CommentsSection>
  )
}

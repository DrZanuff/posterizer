import { useState, useCallback, useEffect } from 'react'
import { LoadingButton } from '@mui/lab'
import { Comment } from './Comment'
import { CommentModal, DeleteModal } from './Modal'
import { getPosts } from '../../actions/api'
import { Post } from '../../actions/api'
import * as S from './styles'

export function CommentsSection() {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isLoadingMorePosts, setIsLoadingMorePosts] = useState(false)
  const [nextUrl, setNextUrl] = useState<string | null>('')
  const [postsList, setPostsList] = useState<Post[]>([])

  useEffect(() => {
    async function getInitialPosts() {
      const response = await getPosts()

      if (response) {
        setNextUrl(response.next)
        const results = response.results
        setPostsList((prev) => [...prev, ...results])
      }
    }

    getInitialPosts()
  }, [])

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
        <LoadingButton>Load more Posts</LoadingButton>
      </S.CommentsScroll>
      <S.Mask />
      {isCommentModalOpen && (
        <CommentModal handleClose={setIsCommentModalOpen} />
      )}
      {isDeleteModalOpen && <DeleteModal handleClose={setIsDeleteModalOpen} />}
    </S.CommentsSection>
  )
}

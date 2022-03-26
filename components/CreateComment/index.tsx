import { useState, useCallback } from 'react'
import { TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { useSelector, useDispatch } from 'react-redux'
import { setNexturl } from '../../redux/nexturlSlice'
import { setPosts } from '../../redux/postsSlice'
import type { RootState } from '../../redux/store'

import { createPost, getPosts, editPost } from '../../actions/api'
import { sortPostArrayByDate } from '../../utils/sortArrayDate'
import * as S from './styles'

interface CreateCommentProps {
  headTitle?: string
  callbackFunction?: (state: false) => void
  method: 'create' | 'edit'
  idToEdit?: number
  titleToEdit?: string
  contentToEdit?: string
}

export function CreateComment({
  headTitle,
  callbackFunction = (state) => {},
  method,
  idToEdit,
  titleToEdit = '',
  contentToEdit = '',
}: CreateCommentProps) {
  const dispatch = useDispatch()
  const userName = useSelector((state: RootState) => state.username.name)
  const postsList = useSelector((state: RootState) => state.postlist.posts)

  const [title, setTitle] = useState<string>(titleToEdit)
  const [comment, setComment] = useState<string>(contentToEdit)
  const [isLoading, setIsLoading] = useState(false)

  const handleEdit = useCallback(async () => {
    setIsLoading(true)

    const payload = {
      title,
      content: comment,
    }

    await editPost(Number(idToEdit), payload)
    const response = await getPosts('')

    if (response) {
      const newPostList = postsList.filter((post) => {
        return post.id !== idToEdit
      })

      const results = response.results

      console.log('NEW POST LIST', newPostList)
      console.log('RESULTS', results)

      dispatch(setNexturl(String(response.next)))
      dispatch(setPosts(sortPostArrayByDate([...newPostList, ...results])))
    }

    setTitle('')
    setComment('')
    setIsLoading(false)
    callbackFunction(false)
  }, [callbackFunction, comment, dispatch, idToEdit, postsList, title])

  const handleCreate = useCallback(async () => {
    setIsLoading(true)

    const payload = {
      username: String(userName),
      title,
      content: comment,
    }

    await createPost(payload)
    const response = await getPosts('')

    if (response) {
      const results = response.results
      dispatch(setNexturl(String(response.next)))
      dispatch(setPosts(sortPostArrayByDate([...postsList, ...results])))
    }

    setTitle('')
    setComment('')
    setIsLoading(false)
  }, [comment, dispatch, postsList, title, userName])

  return (
    <S.CommentBody>
      {headTitle ? (
        <h1>{headTitle}</h1>
      ) : (
        <h1>{`Welcome ${userName}, what's on your mind?`}</h1>
      )}
      <TextField
        label="Title"
        placeholder="Hello World"
        size="small"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <TextField
        label="Content"
        placeholder="Content here"
        multiline
        maxRows={3}
        minRows={3}
        size="small"
        value={comment}
        onChange={(evt) => setComment(evt.target.value)}
      />
      <S.ButtonContainer>
        <LoadingButton
          variant="contained"
          size="small"
          disabled={title === '' || comment === ''}
          loading={isLoading}
          onClick={() => {
            if (method === 'create') {
              handleCreate()
            } else {
              handleEdit()
            }
          }}
        >
          {method === 'create' ? 'CREATE' : 'SAVE'}
        </LoadingButton>
      </S.ButtonContainer>
    </S.CommentBody>
  )
}

import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { LoadingButton } from '@mui/lab'
import { Button, Paper } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../../../../redux/postsSlice'
import type { RootState } from '../../../../redux/store'

import { deletePost } from '../../../../actions/api'
import type { ModalProps } from '../types'
import * as S from '../styles'
import theme from '../../../../styles/theme'

const DeleteModalContainer = styled.div`
  display: flex;
  max-width: 661px;
  width: 100%;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 700px) {
    gap: 32px;
  }
`

export function DeleteModal({ handleClose, id }: ModalProps) {
  const dispatch = useDispatch()
  const postsList = useSelector((state: RootState) => state.postlist.posts)
  const [isLoading, setIsLoading] = useState(false)

  const handleDeletePost = useCallback(async () => {
    setIsLoading(true)

    await deletePost(Number(id))

    const filteredPosts = postsList.filter((post) => post.id !== id)

    dispatch(setPosts(filteredPosts))

    setIsLoading(true)
    handleClose(false)
  }, [dispatch, handleClose, id, postsList])

  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <DeleteModalContainer>
          <Paper sx={{ width: '100%' }}>
            <S.Content>
              <h2>Are you sure you want to delete this item?</h2>
              <S.Row>
                <ButtonsContainer>
                  <Button
                    variant="outlined"
                    size="small"
                    disabled={isLoading}
                    onClick={() => handleClose(false)}
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    variant="contained"
                    size="small"
                    loading={isLoading}
                    onClick={() => handleDeletePost()}
                    sx={{ color: theme.colors.WHITE }}
                  >
                    Ok
                  </LoadingButton>
                </ButtonsContainer>
              </S.Row>
            </S.Content>
          </Paper>
        </DeleteModalContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

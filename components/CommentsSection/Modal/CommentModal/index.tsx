import styled from 'styled-components'
import { Paper } from '@mui/material'
import { CreateComment } from '../../../CreateComment'
import type { ModalProps } from '../types'
import * as S from '../styles'

const CommentModalContainer = styled.div`
  display: flex;
  max-width: 723px;
  width: 100%;
`

export function CommentModal({ handleClose }: ModalProps) {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <CommentModalContainer>
          <Paper sx={{ width: '100%' }}>
            <CreateComment
              headTitle="Edit"
              method="edit"
              callbackFunction={handleClose}
            />
            {/* <S.Content>
              <h2>Edit Item</h2>
              <TextField label="Title" placeholder="Hello World" size="small" />
              <TextField
                label="Content"
                placeholder="Content here"
                multiline
                maxRows={3}
                minRows={3}
                size="small"
              />
              <S.Row>
                <LoadingButton
                  variant="contained"
                  size="small"
                  disabled={title === '' || comment === ''}
                  loading={isLoading}
                  onClick={() => handleClose(false)}
                >
                  Save
                </LoadingButton>
              </S.Row>
            </S.Content> */}
          </Paper>
        </CommentModalContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

import styled from 'styled-components'
import { LoadingButton } from '@mui/lab'
import { TextField, Paper } from '@mui/material'
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
            <S.Content>
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
                  onClick={() => handleClose(false)}
                >
                  Save
                </LoadingButton>
              </S.Row>
            </S.Content>
          </Paper>
        </CommentModalContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

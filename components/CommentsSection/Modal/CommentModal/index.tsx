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
const Padding = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
`

export function CommentModal({ handleClose, id, content, title }: ModalProps) {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <CommentModalContainer>
          <Paper sx={{ width: '100%' }}>
            <Padding>
              <CreateComment
                headTitle="Edit"
                method="edit"
                idToEdit={id}
                titleToEdit={title}
                contentToEdit={content}
                callbackFunction={handleClose}
              />
            </Padding>
          </Paper>
        </CommentModalContainer>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

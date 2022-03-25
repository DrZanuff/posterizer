import styled from 'styled-components'
import { LoadingButton } from '@mui/lab'
import { Button, Paper } from '@mui/material'
import type { ModalProps } from '../types'
import * as S from '../styles'

const DeleteModalContainer = styled.div`
  display: flex;
  max-width: 661px;
  width: 100%;
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export function DeleteModal({ handleClose }: ModalProps) {
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
                    onClick={() => handleClose(false)}
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    variant="contained"
                    size="small"
                    onClick={() => handleClose(false)}
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

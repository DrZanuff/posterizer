import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { TextField, Button } from '@mui/material'
import * as S from './styles'

export function CreateComment() {
  const userName = useSelector((state: RootState) => state.username.name)

  return (
    <S.CommentBody>
      <h1>{`Welcome ${userName}, what’s on your mind?`}</h1>
      <TextField label="Title" placeholder="Hello World" size="small" />
      <TextField
        label="Content"
        placeholder="Content here"
        multiline
        maxRows={3}
        minRows={3}
        size="small"
      />
      <S.ButtonContainer>
        <Button variant="contained" size="small">
          Create
        </Button>
      </S.ButtonContainer>
    </S.CommentBody>
  )
}

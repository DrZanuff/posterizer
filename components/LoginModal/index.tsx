import { useState } from 'react'
import { Paper, TextField } from '@mui/material'
import { LoadingButton as Button } from '@mui/lab'
import * as S from './styles'

export function LoginModal() {
  const [userName, setUserName] = useState<String>()
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (text: string) => {
    setIsDisabled(text === '')
    setUserName(text)
  }

  const handleClick = () => {
    setIsLoading(true)
  }

  return (
    <S.LoginContainer>
      <Paper sx={{ maxWidth: '500px', height: '220px', width: '100%' }}>
        <S.LoginModal>
          <h1>Entre com o seu usuário</h1>
          <TextField
            variant="outlined"
            size="small"
            value={userName}
            onChange={(event) => handleChange(event.target.value)}
            label="Nome do usuário"
          />
          <Button
            variant="contained"
            disabled={isDisabled}
            loading={isLoading}
            onClick={handleClick}
          >
            Entrar
          </Button>
        </S.LoginModal>
      </Paper>
    </S.LoginContainer>
  )
}

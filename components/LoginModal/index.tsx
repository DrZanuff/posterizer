import { useState, useCallback } from 'react'
import { Paper, TextField } from '@mui/material'
import { LoadingButton as Button } from '@mui/lab'

import { useDispatch } from 'react-redux'
import { setName } from '../../redux/usernameSlice'
import type { ComponentsList } from '../../pages/index'

import * as S from './styles'
import theme from '../../styles/theme'

interface LoginModalProps {
  changeComponent: (componentName: ComponentsList) => void
}

export function LoginModal({ changeComponent }: LoginModalProps) {
  const [userName, setUserName] = useState<String>()
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleChange = useCallback((text: string) => {
    setIsDisabled(text === '')
    setUserName(text)
  }, [])

  const handleClick = useCallback(async () => {
    setIsLoading(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    changeComponent('MainPage')

    dispatch(setName(String(userName)))
  }, [changeComponent, dispatch, userName])

  return (
    <S.LoginContainer>
      <Paper sx={{ maxWidth: '500px', height: '220px', width: '100%' }}>
        <S.LoginModal>
          <h1>Entre com o seu usuário</h1>
          <TextField
            variant="outlined"
            size="small"
            value={userName}
            disabled={isLoading}
            onChange={(event) => handleChange(event.target.value)}
            label="Nome do usuário"
          />
          <Button
            variant="contained"
            disabled={isDisabled}
            loading={isLoading}
            onClick={handleClick}
            sx={{ color: theme.colors.WHITE }}
          >
            Entrar
          </Button>
        </S.LoginModal>
      </Paper>
    </S.LoginContainer>
  )
}

import { useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import * as S from './styles'
import type { RootState } from '../../redux/store'

export function MainPage() {
  const userName = useSelector((state: RootState) => state.username.name)

  return (
    <S.MainPageContainer>
      <Paper>{userName}</Paper>
    </S.MainPageContainer>
  )
}

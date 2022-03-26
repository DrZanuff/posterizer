import { Paper } from '@mui/material'
import { CreateComment } from '../CreateComment'
import { CommentsSection } from '../CommentsSection'
import { Logo } from '../Logo'
import * as S from './styles'

export function MainPage() {
  return (
    <S.MainPageContainer>
      <Paper sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        <S.MainPageHeader>
          <Logo />
          {/* <h1>your spot to Basketball News</h1> */}
        </S.MainPageHeader>
        <S.PageBody>
          <CreateComment method="create" />
          <CommentsSection />
        </S.PageBody>
      </Paper>
    </S.MainPageContainer>
  )
}

import { Paper } from '@mui/material'
import { CreateComment } from '../CreateComment'
import { CommentsSection } from '../CommentsSection'
import * as S from './styles'

export function MainPage() {
  return (
    <S.MainPageContainer>
      <Paper sx={{ width: '100%' }}>
        <S.PageBody>
          <CreateComment />
          <CommentsSection />
        </S.PageBody>
      </Paper>
    </S.MainPageContainer>
  )
}

import { format, intervalToDuration, formatDistanceToNowStrict } from 'date-fns'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { DeleteIcon, EditIcon } from './icons'
import type { Post } from '../../../actions/api'
import * as S from './styles'

interface CommentProps extends Post {
  toggleCommentModal: (status: boolean) => void
  toogleDeleteModal: (status: boolean) => void
}

export function Comment({
  toggleCommentModal,
  toogleDeleteModal,
  created_datetime,
  username,
  content,
  title,
}: CommentProps) {
  const userName = useSelector((state: RootState) => state.username.name)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)

    const { days } = intervalToDuration({
      start: date,
      end: new Date(),
    })

    if (days === undefined) {
      return
    }

    return days > 2
      ? format(date, 'dd/MM/YYY')
      : `${formatDistanceToNowStrict(date)} ago`
  }

  return (
    <S.CommentBody>
      <S.CommentHead>
        <h3>{title}</h3>
        {userName === username && (
          <S.ButtonsContainer>
            <S.IconButton onClick={() => toogleDeleteModal(true)}>
              <DeleteIcon />
            </S.IconButton>

            <S.IconButton onClick={() => toggleCommentModal(true)}>
              <EditIcon />
            </S.IconButton>
          </S.ButtonsContainer>
        )}
      </S.CommentHead>
      <S.PostInfo>
        <span>
          @<b>{username}</b>
        </span>
        <span>{formatDate(created_datetime)}</span>
      </S.PostInfo>
      <S.CommentText>
        <p>{content}</p>
      </S.CommentText>
    </S.CommentBody>
  )
}

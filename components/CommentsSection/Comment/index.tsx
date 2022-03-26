import { DeleteIcon, EditIcon } from './icons'
import type { Post } from '../../../actions/api'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
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
        <span>{created_datetime}</span>
      </S.PostInfo>
      <S.CommentText>
        <p>{content}</p>
      </S.CommentText>
    </S.CommentBody>
  )
}

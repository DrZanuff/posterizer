import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { formatDate } from '../../../utils/formatPostDate'
import { DeleteIcon, EditIcon } from './icons'
import type { Post } from '../../../actions/api'
import * as S from './styles'

interface PostEditData {
  id: number
  title: string
  content: string
}
interface CommentProps extends Post {
  toggleCommentModal: (status: boolean) => void
  toogleDeleteModal: (status: boolean) => void
  setPostDataToEdit: (payload: PostEditData) => void
}

export function Comment({
  toggleCommentModal,
  toogleDeleteModal,
  setPostDataToEdit,
  created_datetime,
  username,
  content,
  title,
  id,
}: CommentProps) {
  const userName = useSelector((state: RootState) => state.username.name)

  const handleEdit = useCallback(() => {
    toggleCommentModal(true)
    setPostDataToEdit({ id, title, content })
  }, [content, id, setPostDataToEdit, title, toggleCommentModal])

  return (
    <S.CommentBody>
      <S.CommentHead>
        <h3>{title}</h3>
        {userName === username && (
          <S.ButtonsContainer>
            <S.IconButton onClick={() => toogleDeleteModal(true)}>
              <DeleteIcon />
            </S.IconButton>

            <S.IconButton onClick={() => handleEdit()}>
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

import { DeleteIcon, EditIcon } from './icons'
import * as S from './styles'

interface CommentProps {
  toggleCommentModal: (status: boolean) => void
  toogleDeleteModal: (status: boolean) => void
}

export function Comment({
  toggleCommentModal,
  toogleDeleteModal,
}: CommentProps) {
  return (
    <S.CommentBody>
      <S.CommentHead>
        <h3>Post Title</h3>
        <S.ButtonsContainer>
          <S.IconButton onClick={() => toogleDeleteModal(true)}>
            <DeleteIcon />
          </S.IconButton>

          <S.IconButton onClick={() => toggleCommentModal(true)}>
            <EditIcon />
          </S.IconButton>
        </S.ButtonsContainer>
      </S.CommentHead>
      <S.PostInfo>
        <span>
          @<b>User</b>
        </span>
        <span>10/20/2022</span>
      </S.PostInfo>
      <S.CommentText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
          minus, culpa sapiente cumque debitis voluptate expedita, dicta ipsum
          id in deleniti! Non numquam possimus aliquid repudiandae tempore
          sequi! Deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
          minus, culpa sapiente cumque debitis voluptate expedita, dicta ipsum
          id in deleniti! Non numquam possimus aliquid repudiandae tempore
          sequi! Deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
          minus, culpa sapiente cumque debitis voluptate expedita, dicta ipsum
          id in deleniti! Non numquam possimus aliquid repudiandae tempore
          sequi! Deleniti.
        </p>
      </S.CommentText>
    </S.CommentBody>
  )
}

import { useState, useCallback } from 'react'
import { Comment } from './Comment'
import { CommentModal, DeleteModal } from './Modal'
import * as S from './styles'

export function CommentsSection() {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <S.CommentsSection>
      <S.CommentsScroll>
        <Comment
          toggleCommentModal={setIsCommentModalOpen}
          toogleDeleteModal={setIsDeleteModalOpen}
        />
        <Comment
          toggleCommentModal={setIsCommentModalOpen}
          toogleDeleteModal={setIsDeleteModalOpen}
        />
        <Comment
          toggleCommentModal={setIsCommentModalOpen}
          toogleDeleteModal={setIsDeleteModalOpen}
        />
        <Comment
          toggleCommentModal={setIsCommentModalOpen}
          toogleDeleteModal={setIsDeleteModalOpen}
        />
        <Comment
          toggleCommentModal={setIsCommentModalOpen}
          toogleDeleteModal={setIsDeleteModalOpen}
        />
      </S.CommentsScroll>
      <S.Mask />
      {isCommentModalOpen && (
        <CommentModal handleClose={setIsCommentModalOpen} />
      )}
      {isDeleteModalOpen && <DeleteModal handleClose={setIsDeleteModalOpen} />}
    </S.CommentsSection>
  )
}

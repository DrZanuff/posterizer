import styled from 'styled-components'

export const CommentBody = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 14px;

  h1 {
    font-size: 14px;
    margin: 0;
  }

  input,
  textarea {
    &::placeholder {
      color: ${({ theme }) => theme.colors.GREY};
      filter: brightness(0.4);
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

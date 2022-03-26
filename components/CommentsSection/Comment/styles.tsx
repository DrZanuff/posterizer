import styled from 'styled-components'

export const CommentBody = styled.article`
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY};
  border-radius: 5px;
`
export const CommentHead = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  min-height: 40px;

  h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.WHITE};
    margin: 0;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const IconButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 22px;
    width: 22px;
    transition: fill 0.2s ease-in-out;
    fill: ${({ theme }) => theme.colors.WHITE};
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.PRIMARY_DARK};
    }
  }
`
export const PostInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  margin-top: 8px;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.GREY};
  }
`
export const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  padding: 8px;

  p {
    font-size: 14px;
    margin: 6px 0;
  }
`

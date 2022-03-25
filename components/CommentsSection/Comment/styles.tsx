import styled from 'styled-components'

export const CommentBody = styled.article`
  height: fit-content;
  border: 1px solid black;
`
export const CommentHead = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: black;
  min-height: 40px;

  h3 {
    font-size: 16px;
    color: white;
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
    fill: white;
  }

  &:hover {
    svg {
      fill: red;
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
    color: #5a5a5a;
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

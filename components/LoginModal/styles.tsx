import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  backdrop-filter: blur(4px);
  background-color: #00000099;
  max-width: 500px;
`
export const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    text-align: center;
  }
`

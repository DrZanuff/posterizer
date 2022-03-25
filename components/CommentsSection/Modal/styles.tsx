import styled from 'styled-components'

export const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #5252527a;
  backdrop-filter: blur(4px);

  z-index: 10;
`
export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 12px;

  h2 {
    font-size: 14px;
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`

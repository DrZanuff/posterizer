import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
`
export const BasketBallContainer = styled.div`
  position: absolute;
  transform-origin: center;
  /* animation: ${rotation} 2s infinite linear; */
  left: 25px;
  top: -1px;
`

import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  margin: auto auto;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 100vh;

  background-image: url('https://images.unsplash.com/photo-1542652694-40abf526446e');
  background-size: cover;
`
export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
  background-color: #00000099;
`

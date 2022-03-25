import styled from 'styled-components'

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`
export const CommentsScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px 5px 20px;
`
export const Mask = styled.div`
  height: 20px;
  position: absolute;
  bottom: -2px;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

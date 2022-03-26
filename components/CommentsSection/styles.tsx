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

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.PRIMARY};
    transition: filter 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.PRIMARY_DARK};
  }
`
export const Mask = styled.div`
  pointer-events: none;
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

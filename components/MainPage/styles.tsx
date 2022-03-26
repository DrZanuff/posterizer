import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
export const MainPageHeader = styled.header`
  display: flex;
  width: 100%;
  /* height: 30px; */
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  padding: 8px;
  margin-bottom: 8px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 15px;

  h1 {
    margin: 0;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.WHITE};
  }
`

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 57px 25px 5px;
`

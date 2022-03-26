import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	html,
	body {

    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: none;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.PRIMARY};
      transition: filter 0.2s ease-in;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.PRIMARY_DARK};
    }

  }

  p,h1,h2,h3 {
    color: ${({ theme }) => theme.colors.PRIMARY_DARK};
  }

`

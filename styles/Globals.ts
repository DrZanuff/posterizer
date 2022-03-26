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
      background: #ff8000;
      transition: filter 0.2s ease-in;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #100903;
    }

  }

  p,h1,h2,h3 {
    color: #100903;
  }

`

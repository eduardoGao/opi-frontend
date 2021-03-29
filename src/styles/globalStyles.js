import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  color: {
    primary: '#2863DE',
    secondary: '#FF5F73',
    light: '#f6feff',
    gray: '#9baaca',
    dark: '##454555'
  },
  font: {
    main: 'Roboto, sans-serif'
  },
  shadow: '0px 0px 15px 1px rgb(0 0 0 / 12%)'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: ${(props) => props.theme.font.main};
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  body::-webkit-scrollbar {
    width: 0.3em;
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray};
    border-radius: 1rem;
  }
`

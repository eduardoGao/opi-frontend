import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle, theme } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('app'))

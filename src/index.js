import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle, theme } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </ThemeProvider>
  </>,
  document.getElementById('app'))

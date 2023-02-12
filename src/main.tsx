import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import FontStyles from './Font.style'
import { GlobalStyle } from './Global.style'
import Theme from './Theme.style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <FontStyles />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/system'
import { theme } from './theme'
import { WalletProvider } from './components/wallet/WalletProvider'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WalletProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WalletProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

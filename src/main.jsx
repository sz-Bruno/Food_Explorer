import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import {SignIn} from './pages/SignIn'
import { Home } from './pages/Home'
import {PaymentArea} from "./pages/PaymentArea"
import GloalStyle from "./styles/global"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GloalStyle/>
      <PaymentArea/>
    </ThemeProvider>
    
  </React.StrictMode>,
)

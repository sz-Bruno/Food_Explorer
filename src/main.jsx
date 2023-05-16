import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import {SignIn} from './pages/SignIn'
import { Home } from './pages/Home'
import {PaymentArea} from "./pages/PaymentArea"
import { Create } from './pages/Create'
import { DishDetails } from './pages/DishDetails'
import { Routes } from './Routes'
import GloalStyle from "./styles/global"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { AuthProvider } from './hooks/Auth'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GloalStyle/>
        <AuthProvider>
          <Routes/>
       </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

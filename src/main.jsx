import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthWrapper} from './context/auth.context.jsx'
import App from './App.jsx'
import './index.css'
import { ImPrevious } from 'react-icons/im'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthWrapper>
    <App />
    </AuthWrapper>
  </StrictMode>
)

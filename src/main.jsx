import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthWrapper } from './context/auth.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthWrapper>
    <App />
    </AuthWrapper>
  </StrictMode>,
)

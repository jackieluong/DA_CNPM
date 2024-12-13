import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthWrapper} from './context/auth.context.jsx'
import App from './App.jsx'
import './index.css'
import { ImPrevious } from 'react-icons/im'
import { CartProvider } from './context/cart.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthWrapper>
      <CartProvider>
    <App />
    </CartProvider>
    </AuthWrapper>
    
  </StrictMode>
)

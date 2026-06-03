import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartContextProvider } from './context/CartContext'
import './index.css'
import App from './App.jsx'
import {Toaster} from'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartContextProvider>
        <App />
        <Toaster position="top-right" />
      </CartContextProvider>
    </AuthProvider>
  </BrowserRouter>
)
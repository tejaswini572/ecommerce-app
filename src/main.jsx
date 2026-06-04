import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartContextProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext' 
import { ThemeContextProvider } from './context/ThemeContext' 
import './index.css'
import App from './App.jsx'
import {Toaster} from'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartContextProvider>
        <WishlistProvider>
          <ThemeContextProvider>
        <App />
        <Toaster position="top-right" />
        </ThemeContextProvider>
        </WishlistProvider>
      </CartContextProvider>
    </AuthProvider>
  </BrowserRouter>
)
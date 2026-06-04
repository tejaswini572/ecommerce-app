import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import { useAuth } from './context/AuthContext'
import ProtectedRouts from './routes/ProtectedRoutes'
import ProfilePage from './pages/ProfilePage'
import WishlistPage from './pages/WishlistPage'
import { useTheme } from './context/ThemeContext'

function App() {
  const { user }= useAuth()
  const { isDark } =useTheme()
  return (
    <div className={isDark ? 'dark':''}>
      
    
    {user && <Navbar />}
    <Routes>
      
      <Route path="/" element={<LoginPage />} />
     <Route path="/home" element={<ProtectedRouts><HomePage /></ProtectedRouts>} />
      <Route path="/product/:id" element={<ProtectedRouts><ProductDetailsPage /></ProtectedRouts>} />
     <Route path="/cart" element={<ProtectedRouts><CartPage  /></ProtectedRouts>} />
     <Route path ="/profile" element={<ProtectedRouts><ProfilePage /></ProtectedRouts>} />
     <Route path ="/wishlist" element={<ProtectedRouts><WishlistPage /></ProtectedRouts>} />

     
    </Routes>
    </div>
    
  )
}
export default App
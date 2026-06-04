import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar=()=>{
    const user=useSelector(state=>state.auth.user)
    const cart=useSelector(state=>state.cart)
    const navigate =useNavigate()
    const {isDark,toggleTheme}=useTheme()
    const dispatch=useDispatch()
const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }


    return (
        <nav className="bg-indigo-600 text-white px-4 md:px-8 py-4 flex flex-wrap justify-between items-center gap-2">
        <h1 onClick={()=>navigate('/home')} className="text-xl font-bold cursor-pointer">ShopEasy</h1>

        <div className="flex  flex-wrap gap-4 items-center text-sm">
            <span>Hi,{user?.username}!</span>
            <button onClick={()=>navigate('/profile')}>Profile</button>
            <button onClick={()=>navigate('/cart')}>🛒Cart({cart.length})</button>
            <button onClick={()=>navigate('/wishlist')}>Wishlist</button>
            <button onClick={toggleTheme}>{isDark? '🌙':'☀️'}</button>
            
            <button onClick={handleLogout}>Logout</button>
        </div>
        </nav>
    )
}
export default Navbar
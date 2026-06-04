import {useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authService'
import  { login } from '../store/slices/authSlice'
import { useTheme } from '../context/ThemeContext'
import toast from 'react-hot-toast'
import { getUserById } from '../services/userService'
import { getAllUsers } from '../services/userService'
import { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch=useDispatch()
  const navigate = useNavigate()
  const { isDark, toggleTheme }=useTheme()

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    try {
      const token = await loginUser(username, password)
      const users=await getAllUsers()
      
        const matchedUser=users.find(u=>u.username === username)
        if(!matchedUser) {
  toast.error('User not found!')
  return}
      

      dispatch(login({user : {username,id:matchedUser.id},token}))
      navigate('/home')
    } catch (err) {
      toast.error('Invalid username or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-900 flex items-center justify-center px-4 py-8">
      <div className="absolute top-4 right-4"><button onClick={toggleTheme}>{isDark? '🌙':'☀️'}</button>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md dark:bg-gray-800">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">
            ShopEasy
          </h1>
          <p className="text-gray-500 mt-2">
            Welcome back! Please login.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
              loading
                ? 'bg-indigo-300 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Test: mor_2314 / 83r5^_
        </p>
      </div>
      
    </div>
  )
}

export default LoginPage
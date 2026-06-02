import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/authService'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    try {
      const token = await loginUser(username, password)

      login({ username }, token)

      navigate('/home')
    } catch (err) {
      setError('Invalid username or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
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
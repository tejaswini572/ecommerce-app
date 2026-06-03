import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
// import other pages...

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
     <Route path="/home" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
     {/* <Route path="/cart" element={CartPage} />*/}
    </Routes>
  )
}
export default App
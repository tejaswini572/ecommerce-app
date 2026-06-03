import { useWishlist } from '../context/WishlistContext'
import { useNavigate } from 'react-router-dom'

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist()
  const navigate = useNavigate()

  if(wishlist.length === 0) return <div className="min-h-screen bg-yellow-100 flex items-center justify-center text-2xl">Your wishlist is empty! 🤍</div>

  return (
    <div className="min-h-screen bg-yellow-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Wishlist ❤️</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {wishlist.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.image} className="h-48 object-contain w-full" />
            <h2 className="font-bold text-sm mt-2">{item.title}</h2>
            <p className="text-green-600">${item.price}</p>
            <button onClick={()=>navigate(`/product/${item.id}`)}>View Product</button>
            <button onClick={()=>removeFromWishlist(item.id)}>Remove ❤️</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default WishlistPage
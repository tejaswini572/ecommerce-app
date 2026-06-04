import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addToCart } from '../store/slices/cartSlice'
import{ useSelector, useDispatch } from 'react-redux'
import { addToWishlist } from '../store/slices/wishlistSlice'



const ProductDetailsPage=()=>{
    const {id}=useParams()
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    
    const navigate=useNavigate();
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch()
useEffect(()=>{
    const fetchProducts=async()=>{
        try{
        const data=await getProductById(id);
        setProduct(data);
        }
        catch(err)
        {
            setError("Something went wrong!")
        }
        finally{
            setLoading(false);
        }
    };
fetchProducts();
},[id]);

if(loading){
    return <div className="text-center p-4">Loading..</div>
}
    if(error){
        return <div className="text-center text-red-500">{error}</div>

    }

const handleAddToCart=()=>{
    dispatch(addToCart(product))
toast.success('Added to Cart!')
}
const handleAddToWishlist = () => {
    dispatch(addToWishlist(product))
    toast.success('Added to Wishlist!')
}
return(
<div className="min-h-screen bg-yellow-100 p-8 dark:bg-gray-900">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8 dark:bg-gray-800 dark:text-white ">
        <img src={product.image} alt={product.title}
        className="h-72 w-72 object-contain" />

    <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl font-bold">{product.title}</h1>
         <p className="text-green-600 text-xl">${product.price}</p>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <p className="text-sm">Category: {product.category}</p>
        <p className="text-sm">Rating: {product.rating.rate} </p>
        <button onClick={handleAddToCart}className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Add to Cart
        </button>


<button onClick={() => navigate('/cart')}
    className="mt-3 bg-yellow-500 px-4 py-2 rounded text-white">
  Go to Cart
</button>
<button onClick={handleAddToWishlist} className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
  Add to Wishlist ❤️
</button>


<button onClick={() => navigate('/home')}
    className="mt-3 bg-yellow-500 px-2 py-0.5 rounded text-white">
  Back
</button>
      </div>
    </div>
    </div>
)
}
export default ProductDetailsPage;
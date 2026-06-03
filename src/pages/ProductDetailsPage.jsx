import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { useCart } from '../context/CartContext'

const ProductDetailsPage=()=>{
    const {id}=useParams()
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const { addToCart}=useCart()
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
return(
<div className="min-h-screen bg-yellow-100 p-8">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 flex gap-8">
        <img src={product.image} alt={product.title}
        className="h-72 w-72 object-contain" />

    <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{product.title}</h1>
         <p className="text-green-600 text-xl">${product.price}</p>
          <p className="text-gray-500 text-sm">{product.description}</p>
          <p className="text-sm">Category: {product.category}</p>
        <p className="text-sm">Rating: {product.rating.rate} </p>
        <button onClick={(e)=>addToCart(product)}className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
)
}
export default ProductDetailsPage;
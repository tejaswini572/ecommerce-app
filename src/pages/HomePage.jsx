import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/productService'
import { useNavigate } from'react-router-dom'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate=useNavigate()

  useEffect(()=>{
    const fetchProducts =async()=>{
    try{
        const data=await getAllProducts();
        setProducts(data);
    }
    catch(err)
    {
        setError("Something went wrong");
    }
    finally{
        setLoading(false);
    }
  };
fetchProducts();
},[]);

if(loading)
    return <div className="text-center p-4">Loading..</div>
if(error) return <div className="text-center text-red-500">{error}</div>

return (
    <div className="bg-yellow-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product=>(
            
            <div key={product.id}
                onClick={()=>navigate(`/product/${product.id}`)}
                 className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 cursor-pointer">
    
                <img src={product.image} alt={product.title} className="h-48 object-contain w-full" />
                <h2 className="font-bold text-sm line-clamp-2 mt-2">
                    {product.title}
                    </h2>
                <p className="text-green-600">
                    ${product.price}
                    </p>
                    <p className="text-center font-bold text-sm text-black-600">Category:{product.category}</p>
                    <p className="text-center font-bold text-sm"> Rating :{product.rating.rate}</p>
               
                </div>
        ))}
    </div>
    
</div>
    

)
}
export default HomePage

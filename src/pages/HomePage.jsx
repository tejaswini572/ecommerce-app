import { useState, useEffect } from 'react'
import { useNavigate } from'react-router-dom'
import { getAllProducts, getCategories, getProductsByCategory } from '../services/productService'
import { useWishlist } from '../context/WishlistContext'

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [categories,setCategories]=useState([])
  const [selectCategory,setSelectCategory]=useState('all')
  const [searchQuery,setSearchQuery]=useState('')
  const [sortOrder,setSortOrder]=useState('default')

  const navigate=useNavigate()
  const { wishlist,addToWishlist,removeFromWishlist }=useWishlist()
  const isWishlisted=(productId)=>wishlist.some(item=>item.id===productId)

  useEffect(()=>{
    const fetchProducts =async()=>{
    try{
        const data=await getAllProducts();
        setProducts(data);

        const cats=await getCategories();
        setCategories(cats);
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


const filteredProducts=products
.filter(p=>selectCategory==='all'?true:p.category===selectCategory)
.filter(p=>p.title.toLowerCase().includes(searchQuery.toLowerCase()))
.sort((a,b)=>{
    if(sortOrder === 'lowToHigh') return a.price-b.price
    if(sortOrder === 'highToLow' ) return b.price-a.price
    return 0;
})
return (
    <div className="bg-yellow-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
        <select
        value={sortOrder}
        onChange={(e)=>setSortOrder(e.target.value)}
         className="border px-4 py-2 rounded-lg mb-4">
            <option value="default">Sort By</option>
            <option value="lowToHigh">Price:Low to High</option>
            <option value="highToLow">Price:High to Low</option>
         </select>
        <input 
        type="text"
        placeholder="Search Products..."
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        className="border px-4 py-2 rounded-lg w-full max-w-md mb-4"/>
        <div className="flex gap-2 mb-6 justify-center flex-wrap font-serif">
            <button onClick={()=>setSelectCategory('all')}
            className="bg-yellow-200 px-4 py-2 rounded-full shadow hover:bg-yellow-300">
        All
        </button>
            {categories.map(cat=>(
                <button key={cat} onClick={()=>setSelectCategory(cat)}className="bg-yellow-200 px-4 py-2 rounded-full shadow hover:bg-yellow-300"
    >{cat}</button>
            
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product=>(
            
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
               <button onClick={(e)=>{
                e.stopPropagation()
                isWishlisted(product.id)?removeFromWishlist(product.id)
                : addToWishlist(product)
               }}>{isWishlisted(product.id)?'❤️' : '🤍'}</button>
                </div>
        ))}
    </div>
   
</div>
    

)
}
export default HomePage

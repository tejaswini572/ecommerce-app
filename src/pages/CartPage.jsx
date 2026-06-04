import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CartPage=()=>{
const { cart, removeFromCart, updateQuantity }= useCart()
const navigate=useNavigate();
  
if (cart.length===0)
    return <div className="min-h-screen flex items-ceneter justify-center bg-yellow-100 text-3xl font-serif dark:bg-gray-900 dark:text-white"> Your cart is empty!</div>
    const total=cart.reduce(
        (sum,item)=>sum+(item.price*item.quantity),0
)

return (
    <div className="min-h-screen bg-yellow-100 p-8 dark:bg-gray-900 dark:text-white">
        {cart.map(item=>(
            <div key={item.id} className ="bg-white rounded-lg shadow p-4 mb-4 flex flex-col md:flex-row gap-4 dark:bg-gray-800 ">
                <img src={item.image} className="h-24 w-24 object-contain mx-auto" />
                <div>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                    <p>subtotal:${item.price*item.quantity}</p>
                <div className="flex gap-2 items-center">
            <button className="bg-gray-200 px-3 py-1 rounded font-bold" onClick={()=>updateQuantity(item.id,item.quantity-1)}>-</button>
            <span className="px-2">{item.quantity}</span>
            <button className ="bg-gray-200 px-3 py-1 rounded font-bold" onClick={()=>updateQuantity(item.id,item.quantity+1)}>+</button>
            </div>
            <button
             className="mt-2 text-red-500 font-semibold"
             onClick={()=>{removeFromCart(item.id)
                toast.error('Item removed from the cart!')
            }}>Remove</button>
            
                </div>
                </div>
        ))}
        <div className="mt-6 flex flex-col gap-2">
            <h2 className="text-xl font-bold">Total:${total.toFixed(2)}</h2>
            <button onClick={() => navigate('/home')}
                className="mt-3 bg-yellow-500 px-4 py-2 rounded text-white">
  Continue Shopping
</button></div></div>
            
)
}
export default CartPage;
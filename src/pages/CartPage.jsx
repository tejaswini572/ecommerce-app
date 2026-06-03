import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartPage=()=>{
const { cart, removeFromCart, updateQuantity }= useCart()
const navigate=useNavigate();
  
if (cart.length===0)
    return <div className="min-h-screen flex items-ceneter justify-center bg-yellow-100 text-3xl font-serif"> Your cart is empty!</div>
    const total=cart.reduce(
        (sum,item)=>sum+(item.price*item.quantity),0
)
return (
    <div className="min-h-screen bg-yellow-100 p-8">
        {cart.map(item=>(
            <div key={item.id} className ="bg-white rounded-lg shadow p-4 mb-4 flex flex-col md:flex-row gap-4">
                <img src={item.image} className="h-24 w-24 object-contain" />
                <div>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                    <p>subtotal:${item.price*item.quantity}</p>
                <div className="flex gap-2 items-center">
            <button onClick={()=>updateQuantity(item.id,item.quantity-1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>updateQuantity(item.id,item.quantity+1)}>+</button>
            </div>
            <button onClick={()=>removeFromCart(item.id)}>Remove</button>
            
                </div>
                </div>
        ))}
        
            <h2>Total:${total.toFixed(2)}</h2>
            <button onClick={() => navigate('/home')}
                className="mt-3 bg-yellow-500 px-4 py-2 rounded text-white">
  Continue Shopping
</button></div>
            
)
}
export default CartPage;
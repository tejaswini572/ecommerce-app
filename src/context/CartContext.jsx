/*import { useContext,useState,createContext } from 'react'

const CartContext=createContext();

const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([]);


const addToCart=(product)=>{
    const exists=cart.find(item=>item.id===product.id)
    if(exists)
    {
        setCart(
            cart.map(item=>item.id===product.id?{...item,quantity:item.quantity+1}:item)
        );
        
    }
    else{
    setCart([...cart,{...product,quantity:1}]);
    }
}


const updateQuantity=(productId,quantity)=>{
    setCart(
        cart.map(item=>item.id===productId?{...item,quantity}:
            item
        )
    );
}

const removeFromCart=(productId)=>{
    setCart(cart.filter(item=>item.id!==productId));
    
}

return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity}}>{children}</CartContext.Provider>
);
}
export { CartContextProvider };
export const useCart = () => useContext(CartContext);*/

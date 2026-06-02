import { useContext,useState,createContext } from 'react'

const CartContext=createContext();

const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([]);


const addToCart=(product)=>{
    setCart([...cart,product]);
    
}

const removeFromCart=(productId)=>{
    setCart(cart.filter(item=>item.id!==productId));
    
}

return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart}}>{children}</CartContext.Provider>
);
}
export { CartContextProvider };
export const useCart = () => useContext(CartContext);

/*import { useContext,useState,createContext } from 'react'

const WishlistContext = createContext()

export const WishlistProvider = ({ children }) =>{
    const[wishlist,setWishlist] = useState([])

    const addToWishlist = (product) =>{
       const exists=wishlist.find(item=>item.id===product.id)
        if(!exists)
        {
            setWishlist([...wishlist,product])
        }
}


const removeFromWishlist =(productId) => {
    setWishlist(wishlist.filter(item=>item.id!==productId))
}

return (
    <WishlistContext.Provider value={{ wishlist,addToWishlist,removeFromWishlist }}>{children}</WishlistContext.Provider>
)
}
export const useWishlist =()=>useContext(WishlistContext)*/
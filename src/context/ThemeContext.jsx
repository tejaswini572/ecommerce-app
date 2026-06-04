import { useContext,createContext,useState } from 'react'
const ThemeContext=createContext();
export const ThemeContextProvider =({children })=>{
    const [isDark,setIsDark]= useState(false);

const toggleTheme = () => {
    setIsDark(!isDark)
}
    return(
        <ThemeContext.Provider value={{isDark,toggleTheme}}>{children}</ThemeContext.Provider>
    )
    
}
export const useTheme=()=>useContext(ThemeContext)
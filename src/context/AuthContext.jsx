import { createContext,useState,useContext } from 'react';
import {loginUser} from '../services/authService';

const AuthContext=createContext();

export const AuthProvider= ({children})=> {
    const [user,setUser]=useState(localStorage.getItem('token') ? { username: 'user' } : null);
    const[token,setToken]=useState(localStorage.getItem('token') || null);


const login = (userData,token) => {
  setUser(userData);
  setToken(token);
    localStorage.setItem('token',token);
}

const logout=()=>{
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
}
return (
    <AuthContext.Provider value={{user,token,login,logout}}>{children}</AuthContext.Provider>
)
}

export const useAuth = () => useContext(AuthContext)
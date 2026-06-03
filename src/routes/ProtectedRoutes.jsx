import { useAuth } from '../context/AuthContext'
import {Navigate } from 'react-router-dom'

const ProtectedRouts=({children}) =>{
    const {user }= useAuth()

    if(!user) return <Navigate to="/" />
    return children 
}
 export default ProtectedRouts

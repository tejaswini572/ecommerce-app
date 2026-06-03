import { useState,useEffect } from 'react'
import { getUserById } from '../services/userService'


const ProfilePage=()=> {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')


    useEffect(()=>{
      
        const fetchUser=async()=>{
              try{
            const data=await getUserById(1)
            setUser(data)
        }
        catch(err)
        {
            setError("Something went wrong")
        }
        finally{
            setLoading(false)
        }
    }
    fetchUser();

    },[])
    
    if(loading) return <div className="text-center p-4">Loading...</div>
  if(error) return <div className="text-center text-red-500">{error}</div>

    return(
        <div className="min-h-screen bg-yellow-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1> 
        <p>Name:{user.name.firstname}{user.name.lastname}</p>
        <p>Username:{user.username}</p>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phone}</p>
        <p>City:{user.address.city}</p>
        <p>Street: {user.address.street}</p>
        </div></div>
    )
}
export default ProfilePage

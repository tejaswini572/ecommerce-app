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
        <div className="flex flex-col items-center mb-6"><div className="bg-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-3">
            {user.name.firstname[0].toUpperCase()}
          </div>
         <h1 className="text-2xl font-bold">{user.name.firstname} {user.name.lastname}</h1>
          <p className="text-gray-400 text-sm">@{user.username}</p>
        </div>

        
        <div className="flex flex-col gap-3">
          <div className="bg-gray-50 rounded-lg px-4 py-3">
            <p className="text-xs text-gray-400">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
          <div className="bg-gray-50 rounded-lg px-4 py-3">
            <p className="text-xs text-gray-400">Phone</p>
            <p className="font-semibold">{user.phone}</p>
          </div>
          <div className="bg-gray-50 rounded-lg px-4 py-3">
            <p className="text-xs text-gray-400">City</p>
            <p className="font-semibold">{user.address.city}</p>
          </div>
          <div className="bg-gray-50 rounded-lg px-4 py-3">
            <p className="text-xs text-gray-400">Street</p>
            <p className="font-semibold">{user.address.street}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfilePage

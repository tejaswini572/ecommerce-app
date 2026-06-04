import api from './api';

export const getUserById =async (id)=>{
    const response=await api.get(`/users/${id}`);
    return response.data;
}

export const getAllUsers = async() =>{
    const response= await api.get('/users')
    return response.data
}
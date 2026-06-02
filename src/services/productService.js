import api from "./api";

export const  getAllProducts=async()=>{
    const response=await api.get('/products')
    return response.data;
}

export const getProductById=async(id)=>{
    const response=await api.get(`/products/${id}`)
    return response.data;
}

export const getCategories=async()=>{
    const response= await api.get('/products/categories')
    return ( response.data);
}

export const getProductsByCategory=async(name)=>{
    const response=await api.get(`/products/category/${name}`)
    return response.data;
}

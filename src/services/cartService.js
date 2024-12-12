import axios from "axios";

const apiUrl = "http://localhost:8080/api/v1/cart";

const accessToken = localStorage.getItem("accessToken");

export const getCartItems = async() => {
    try {
        const response = await axios.get(`${apiUrl}`,{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        }   
    )

    return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const addToCartService = async(product_id, quantity) => {
    try {
        const response = await axios.post(`${apiUrl}/add`, {product_id, quantity },{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        }   
    )

    return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const updateQuantityService = async(product_id, quantity) => {
    try {
        const response = await axios.post(`${apiUrl}/update`, {product_id, quantity },{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        }   
    )

    return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeFromCartService = async(product_id) => {
    try {
        const response = await axios.delete(`${apiUrl}`,{
            headers:{
                Authorization: `Bearer ${accessToken}`,
            },
            data: {product_id},
        }   
    )

    return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


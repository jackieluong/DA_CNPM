import axios from "axios";

const apiURL = "http://localhost:8080/api/v1/order";

export const fetchOrdersData = async () => {
  try {
    const response = await axios.get(apiURL);
   if(response.status !== 200) {
     throw new Error("Failed to fetch order data");
   }
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};


export const updateOrder = async(id, updatedOrder) => {
  try {
    const response = await axios.put(`${apiURL}/edit/${id}`, updatedOrder);
    if(response.status !== 200) {
      throw new Error("Failed to update order");
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export const getOrderDetails = async(id) => {
  try {
    const response = await axios.get(`${apiURL}/${id}`);
    if(response.status !== 200) {
      throw new Error("Failed to get order details");
    }
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const createOrderService = async(address, ship_fee, payment_method, products) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.post(`${apiURL}/create`, {address, ship_fee, payment_method, products},{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getUserOrders = async() => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await axios.get(`${apiURL}/user`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
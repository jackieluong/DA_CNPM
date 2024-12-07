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
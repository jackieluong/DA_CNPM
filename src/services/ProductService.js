import axios from "axios";

const apiURL = "http://localhost:8080/api/v1/product";

export const fetchProductData = async () => {
  try {
    const response = await axios.get(apiURL);
    
    
    console.log(response);
    if (response.status !== 200) {
      throw new Error("Failed to fetch product data");
    }
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};

export const fetchProductDetail = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/product/${id}`);
    
    
    console.log(response.data.data);
    if (response.status !== 200) {
      throw new Error("Failed to fetch product data");
    }
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};
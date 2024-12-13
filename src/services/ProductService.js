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
    
    if (response.status !== 200) {
      throw new Error(`Failed to fetch product data. Status: ${response.status}`);
    }
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    
    if (error.response && error.response.status === 500) {
      throw new Error("Internal Server Error occurred while fetching product details.");
    }
    
    throw error;
  }
};

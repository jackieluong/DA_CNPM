import axios from "axios";

const apiURL = "http://localhost:8080/api/v1/customer";

export const fetchCustomersData = async () => {
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
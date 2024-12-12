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

export const fetchProductByID = async (id) => {
  console.log("product id", id);
  try {
    const response = await axios.get(`${apiURL}/${id}`);
    
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};
export const addProduct = async (product) => {
  axios.post()
  try {
    const response = await axios.post(`${apiURL}/create`, product, {
      headers: {
        "Content-Type": "application/json",
      },
      
    
    });

    console.log(response);
    return response.data;  // Axios automatically gives you the response data
  } catch (error) {
    console.error("Error adding product:", error);

  }
};
// Delete a product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${apiURL}/${productId}`);  

    // Return the response data on success
    // return await response.json();
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};


// Updating a product
export const updateProduct = async (id, updatedProduct) => {
  // console.log(updatedProduct);
  try {
    const response = await axios.put(`${apiURL}/edit/${id}`, updatedProduct, {
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    console.log(response);

    return response.data; // Return the updated product message
  } catch (error) {
    console.error("Error updating product:", error);
    throw error; // Propagate the error
  }
};
export const fetchProductDetail = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/product/${id}`);
    
    if (response.status !== 200) {
      throw new Error(`Failed to fetch product data. Status: ${response.status}`);
    }
    
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    
    if (error.response && error.response.status === 500) {
      throw new Error("Internal Server Error occurred while fetching product details.");
    }
    
    throw error;
  }
};

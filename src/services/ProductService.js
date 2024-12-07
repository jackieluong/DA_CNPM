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

// Add a new product
// export const addProduct = async (product) => {
//   try {
//     const response = await fetch(apiURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });

//     //   if (!response.ok) {
//     //     throw new Error("Failed to add product");
//     //   }
//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(
//         `Failed to add product: ${
//           errorData.error || response.statusText
//         } (Status: ${response.status})`
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error adding product:", error);
//     throw error;
//   }
// };

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

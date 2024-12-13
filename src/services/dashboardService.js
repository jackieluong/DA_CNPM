import axios from "axios";

const apiURL = "http://localhost:8080/api/v1/dashboard";

export const fetchTotalRevenue = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/revenue`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total revenue");
        }
       //
        return response.data.data.total_revenue;
    } catch (error) {
        console.error("Error fetching total revenue:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};


export const fetchTotalOrders = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/orders`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total revenue");
        }
       //
        return response.data.data.total_orders;
    } catch (error) {
        console.error("Error fetching total revenue:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};



export const fetchTotalOrderDelivered = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/orders-delivered`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total orders delivered");
        }
       //
        return response.data.data.total_orders_delivered;
    } catch (error) {
        console.error("Error fetching total orders delivered:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};



export const fetchTotalOrderShipping = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/orders-shipping`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total orders shipping");
        }
       //
        return response.data.data.total_orders_shipping;
    } catch (error) {
        console.error("Error fetching total orders shipping:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const fetchRevenueByCategory = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/revenue/category`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total revenue");
        }
       //
        return response.data.data;
    } catch (error) {
        console.error("Error fetching total revenue:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const fetchRevenueByBrand = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/revenue/brand`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch total revenue by brand");
        }
       //
        return response.data.data;
    } catch (error) {
        console.error("Error fetching total revenue by brand:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};

export const fetchTopProducts = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${apiURL}/product/top-selling`, {
            params: {
                startDate,
                endDate,
            },
        });
        if(response.status !== 200) {
            throw new Error("Failed to fetch top products");
        }
       
        return response.data.data;
    } catch (error) {
        console.error("Error fetching top products:", error);
        throw error; // Propagate the error for handling in the calling component
    }
};
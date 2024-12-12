// Admin.jsx

import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import ProductList from "./ProductList";
import EditProduct from "./EditProduct";
import CreateProduct from "./CreateProduct";
import PageNotFound from "../PageNotFound";

import ProductDetail from "./ProductDetail";
import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import CustomerList from "./CustomerList";
import PromotionList from "./PromotionList";
import initialProductData from "../../datas/ProductData";
import initialOrderData from "../../datas/OrderData";
import { initialCustomersData } from "../../datas/customerData";
import { samplePromotionData } from "../../datas/promotionData";
import { fetchProductData } from "../../services/ProductService";
import { fetchOrdersData } from "../../services/OrderService";
import { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";

function AdminPage() {
  const [productData, setProductData] = useState(initialProductData);

  const [orderData, setOrderData] = useState(initialOrderData);
  
  const [promotionData, setPromotionData] = useState(samplePromotionData);

  async function fetchProducts() {
    try {
      const data = await fetchProductData();

      const standardizedData = data.map((item) => ({
        product_id: item.product_id,
        name: item.name,
        brand: item.brand,
        quantity: item.quantity,
        price: item.price,
        // rating: item.rating,
        category: item.category,
        imgUrl: item.imgUrl,
        description: item.description,
      }));
      setProductData(standardizedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function fetchOrders() {
    try {
      const data = await fetchOrdersData();
      const standardizedData = data.map((item) => ({
        order_id: item.order_id,
        order_time: item.order_time,
        ship_fee: item.ship_fee,
        payment_method: item.payment_method,
        payment_status: item.payment_status,
        payment_time: item.payment_time,
        status: item.status,
        address: item.address,
        user_id: item.user_id,
      }));
      setOrderData(standardizedData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  
  return (
    <AdminLayout>
      <Routes>
        <Route path="dashboard" index element={<Dashboard />} />
        <Route path="products">
          <Route
            path="list"
            element={
              <ProductList
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="edit/:id"
            element={
              <EditProduct
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="create"
            element={
              <CreateProduct
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <ProductDetail
                productData={productData}
                setProductData={setProductData}
              />
            }
          />
        </Route>
        <Route path="orders">
          <Route
            path="list"
            element={
              <OrderList orderData={orderData} setOrderData={setOrderData} />
            }
          />
          <Route
            path="detail/:id"
            element={
              <OrderDetail />
            }
          />
        </Route>
        <Route path="customers">
          <Route
            path="list"
            element={
              <CustomerList
              
              />
            }
          />
          {/* <Route path="detail/:id" /> */}
        </Route>
        <Route path="promotions">
          <Route
            path="list"
            element={
              <PromotionList
                promotionData={promotionData}
                setPromotionData={setPromotionData}
              />
            }
          />
          <Route path="detail/:id" />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminPage;

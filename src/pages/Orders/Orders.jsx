
import { useEffect, useState } from "react";
import styles from "./Orders.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import icon from '../../assets/mac1.jpg';
import { getUserOrders } from "../../services/OrderService";
import { getStatusBadge } from "../../utils/getStatusBadge";
import { formatCurrency } from "../../utils/formatCurrency";

// const ordersData = [
//   {
//     id: 7,
//     products: [
//       {
//         productName: "Galaxy S23 Ultra",
//         category: "Điện thoại",
//         quantity: 1,
//         price: 15000000,
//         product_id: 10,
//       },
//       {
//         productName: "Galaxy S23 Ultra",
//         category: "Điện thoại",
//         quantity: 1,
//         price: 15000000,
//         product_id: 13,
//       },
//     ],
//     status: "Chờ xác nhận",
//   },
//   {
//     id: 8,
//     products: [
//       {
//         productName: "HP Envy 34 All-in-One",
//         category: "PC",
//         quantity: 2,
//         price: 98000000,
//         product_id: 11,
//       },
//     ],
//     status: "Vận chuyển",
//   },
//   {
//     id: 9,
//     products: [
//       {
//         productName: "HP Envy 34 All-in-One",
//         category: "PC",
//         quantity: 2,
//         price: 98000000,
//         product_id: 11,
//       },
//     ],
//     status: "Hoàn thành",
//   },
//   {
//     id: 10,
//     products: [
//       {
//         productName: "HP Envy 34 All-in-One",
//         category: "PC",
//         quantity: 2,
//         price: 98000000,
//         product_id: 11,
//       },
//     ],
//     status: "Đã hủy",
//   },
// ];

const getStatusClass = (status) => {
  switch (status) {
    case "Chờ xác nhận":
      return styles.pending;
    case "Vận chuyển":
      return styles.shipping;
    case "Hoàn thành":
      return styles.completed;
    case "Đã hủy":
      return styles.canceled;
    default:
      return "";
  }
};
const Orders = () => {
    const [filter, setFilter] = useState("Tất cả");
    const [isLoading, setIsLoading] = useState(false);
    // const filteredOrders = filter === "Tất cả" ? orders : ordersData.filter((order) => order.status === filter);
    // const tabContent = ["Tất cả", "Chờ xác nhận", "Vận chuyển", "Hoàn thành", "Đã hủy",]
    const tabContent = ["Tất cả", "Processing", "Shipping", "Delivered", "Cancelled",]
    const [orders, setOrders] = useState([]);
    const filteredOrders = filter === "Tất cả" ? orders : orders.filter((order) => order.status === filter);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await getUserOrders();
        setOrders(response);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, [])

  if(isLoading){
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

    return (
        <div>
        <NavBar />
        <div className={styles.orderHistoryPage}>
            <div className={styles.container}>
            <h2 className={styles.title}>Lịch sử đặt hàng</h2>
            <div className={styles.tabs}>
                {tabContent.map((status) => (
                <button
                    key={status}
                    className={filter === status ? `${styles.tabOrder} ${styles.tabOrderActive}` : styles.tabOrder}
                    onClick={() => setFilter(status)}
                >
                    {status}
                </button>
                ))}
            </div>
            <div className={styles.orderList}>
                {filteredOrders.map((order) => (
                <div key={order.order_id} className={styles.orderItem}>
                    <div className={styles.titleOrder}>
                    <h6>
                        Mã đơn hàng: <strong>{order.order_id}</strong>
                    </h6>
                    <span className={getStatusClass(order.status)}>{getStatusBadge( order.status)}</span>
                    </div>
                    <hr />
                    <div className={styles.orderInfo}>
                    {order.products.map((product) => (
                        <div key={product.product_id} className={styles.itemProduct}>
                        <div className={styles.leftItem}>
                            <img
                            src={product.imgUrl}
                            alt={product.name}
                            className={styles.productImage}
                            />
                            <div className={styles.nameProduct}>
                            <span>
                                <strong>{product.name}</strong>
                            </span>
                            <span>Số lượng: {product.quantity}</span>
                            </div>
                        </div>
                        <div className={styles.rightItem}>
                            <span>{formatCurrency( product.price)}</span>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className={styles.orderDetails}>
                    <p className={styles.totalPrice}>
                        Tổng tiền: {formatCurrency( order.products.reduce((total, product) => total + product.price * product.quantity, 0))}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Orders;

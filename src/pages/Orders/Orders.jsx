
import { useState } from "react";
import styles from "./Orders.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import icon from '../../assets/mac1.jpg';

const orders = [
  {
    id: 7,
    products: [
      {
        productName: "Galaxy S23 Ultra",
        category: "Điện thoại",
        quantity: 1,
        price: 15000000,
        product_id: 10,
      },
      {
        productName: "Galaxy S23 Ultra",
        category: "Điện thoại",
        quantity: 1,
        price: 15000000,
        product_id: 13,
      },
    ],
    status: "Chờ xác nhận",
  },
  {
    id: 8,
    products: [
      {
        productName: "HP Envy 34 All-in-One",
        category: "PC",
        quantity: 2,
        price: 98000000,
        product_id: 11,
      },
    ],
    status: "Vận chuyển",
  },
  {
    id: 9,
    products: [
      {
        productName: "HP Envy 34 All-in-One",
        category: "PC",
        quantity: 2,
        price: 98000000,
        product_id: 11,
      },
    ],
    status: "Hoàn thành",
  },
  {
    id: 10,
    products: [
      {
        productName: "HP Envy 34 All-in-One",
        category: "PC",
        quantity: 2,
        price: 98000000,
        product_id: 11,
      },
    ],
    status: "Đã hủy",
  },
];

const Orders = () => {
    const [filter, setFilter] = useState("Tất cả");
    const filteredOrders = filter === "Tất cả" ? orders : orders.filter((order) => order.status === filter);
    const tabContent = ["Tất cả", "Chờ xác nhận", "Vận chuyển", "Hoàn thành", "Đã hủy",]
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
                <div key={order.id} className={styles.orderItem}>
                    <div className={styles.titleOrder}>
                    <h6>
                        Mã đơn hàng: <strong>{order.id}</strong>
                    </h6>
                    <span className={styles.status}>{order.status}</span>
                    </div>
                    <hr />
                    <div className={styles.orderInfo}>
                    {order.products.map((product) => (
                        <div key={product.product_id} className={styles.itemProduct}>
                        <div className={styles.leftItem}>
                            <img
                            src={icon}
                            alt={product.productName}
                            className={styles.productImage}
                            />
                            <div className={styles.nameProduct}>
                            <span>
                                <strong>{product.productName}</strong>
                            </span>
                            <span>Số lượng: {product.quantity}</span>
                            </div>
                        </div>
                        <div className={styles.rightItem}>
                            <span>{product.price.toLocaleString()}đ</span>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className={styles.orderDetails}>
                    <p className={styles.totalPrice}>
                        Tổng tiền: {order.products.reduce((total, product) => total + product.price * product.quantity, 0).toLocaleString()}đ
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

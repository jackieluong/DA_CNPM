// import React from 'react';
// import styles from './Payment.module.css';

// import iconProduct from '../../assets/mac1.jpg'
// import NavBar from '../../components/Navbar/Navbar';

// const Payment = () => {
//   const products = [
//     { id: 1, name: 'Nước ngọt Sprite hương chanh lon 320ml', price: 19000, quantity: 2, image: '/images/sprite.jpg' },
//     { id: 2, name: 'Sáp thơm Glade hương hoa lài 180g', price: 75000, quantity: 1, image: '/images/glade.jpg' },
//     { id: 3, name: 'Dầu bôi trơn khuôn SHIN-ETSU-KMK', price: 175000, quantity: 1, image: '/images/shinetsu.jpg' },
//   ];

//   return (
//     <div>
//       <NavBar/>
//     <div className={styles.checkoutPage}>
//       {/* <h1 className={styles.logo}>e-shop.com.vn</h1> */}

//       <div className={styles.content}>

//          {/* Đơn hàng */}
//         <div className={styles.section}>
//           <h2>Đơn hàng (6 sản phẩm)</h2>
//           <div className={styles.orderItems}>
//             {products.map((product) => (
//               <div className={styles.orderItem} key={product.id}>
//                 <img src={iconProduct} alt={product.name} className={styles.productImage} />
//                 <div className={styles.productDetails}>
//                   <p>{product.quantity} x {product.name}</p>
//                   <p>{product.price.toLocaleString()}đ</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Thông tin mua hàng */}
//         <div className={styles.section}>
//           <h2>Thông tin mua hàng</h2>
//           <form className={styles.form}>
//             <div className={styles.inputGroup}>
//               <label>Email</label>
//               <input type="email" placeholder="Nhập email" required />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Họ và tên</label>
//               <input type="text" placeholder="Nhập họ và tên" required />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Số điện thoại</label>
//               <input type="tel" placeholder="Nhập số điện thoại" required />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Tỉnh thành</label>
//               <select>
//                 <option>TP Hồ Chí Minh</option>
//               </select>
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Quận huyện</label>
//               <select>
//                 <option>Quận 3</option>
//               </select>
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Phường xã</label>
//               <select>
//                 <option>Phường 14</option>
//               </select>
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Ghi chú (tuỳ chọn)</label>
//               <textarea placeholder="Thêm ghi chú nếu có"></textarea>
//             </div>
//           </form>
//         </div>

       
//         {/* Thanh toán */}
//         <div className={styles.section}>
//           <h2>Thanh toán</h2>
//           <form className={styles.paymentForm}>
//             <div className={styles.radioGroup}>
//               <input type="radio" id="bankTransfer" name="payment" />
//               <label htmlFor="bankTransfer">Chuyển khoản qua ngân hàng</label>
//             </div>
//             <div className={styles.radioGroup}>
//               <input type="radio" id="cod" name="payment" />
//               <label htmlFor="cod">Thanh toán khi giao hàng (COD)</label>
//             </div>
//           </form>
//           <div className={styles.total}>
//             <p>Tạm tính: 3.749.000đ</p>
//             <p>Phí vận chuyển: 100.000đ</p>
//             <h3>Tổng cộng: 3.849.000đ</h3>
//           </div>
//           <button type="submit" className={styles.orderButton}>
//             Đặt Hàng
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from "react";
import styles from "./Payment.module.css";
import NavBar from "../../components/Navbar/Navbar";

const Payment = () => {
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleConfirmOrder = () => {
    alert("Order Confirmed!");
  };

  return (
    <div>
      <NavBar/>
      <div className={styles.bodyPage}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h2>Delivery Information</h2>
            <form className={styles.form}>
              <div className={styles.formSection}>
                <input type="text" placeholder="Name" className={styles.input} />
                <input type="text" placeholder="Mobile Number" className={styles.input} />
              </div>
              <div className={styles.formSection}>
                <input type="email" placeholder="Email" className={styles.input} />
                <input type="text" placeholder="City" className={styles.input} />
              </div>

              <div className={styles.formSection}>
                <input type="text" placeholder="State" className={styles.input} />
                <input type="text" placeholder="ZIP" className={styles.input} />
              </div>
              <input type="text" placeholder="Address" className={styles.input} />
            </form>

            <h2>Schedule Delivery</h2>
            <div className={styles.schedule}>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className={styles.input}
              />
              <textarea placeholder="Type your note" className={styles.textarea}></textarea>
            </div>

            <h2>Payment Method</h2>
            <div className={styles.paymentMethods}>
              <label>
                <input type="radio" name="payment" value="online" />
                Online Payment
              </label>
              <label>
                <input type="radio" name="payment" value="cash" defaultChecked />
                Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" value="pos" />
                POS on Delivery
              </label>
            </div>
          </div>

          <div className={styles.rightSection}>
            <h2>Order Summary</h2>
            <div className={styles.orderItem}>
              <span>Portable Stereo Speaker</span>
              <span>$230.49</span>
            </div>
            <div className={styles.orderItem}>
              <span>i-Type Instant Camera (x2)</span>
              <span>$630.20</span>
            </div>
            <div className={styles.orderItem}>
              <span>Positive Vibration ANC</span>
              <span>$350.00</span>
            </div>
            <div className={styles.summary}>
              <p>Subtotal: $1,250.32</p>
              <p>Shipping: $50.00</p>
              <h3>Total: $1,300.32</h3>
            </div>
            <button className={styles.confirmButton} onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Payment;

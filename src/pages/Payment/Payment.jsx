import React from 'react';
import styles from './Payment.module.css';

const Payment = () => {
  const products = [
    { id: 1, name: 'Nước ngọt Sprite hương chanh lon 320ml', price: 19000, quantity: 2, image: '/images/sprite.jpg' },
    { id: 2, name: 'Sáp thơm Glade hương hoa lài 180g', price: 75000, quantity: 1, image: '/images/glade.jpg' },
    { id: 3, name: 'Dầu bôi trơn khuôn SHIN-ETSU-KMK', price: 175000, quantity: 1, image: '/images/shinetsu.jpg' },
  ];

  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.logo}>e-shop.com.vn</h1>

      <div className={styles.content}>
        {/* Thông tin mua hàng */}
        <div className={styles.section}>
          <h2>Thông tin mua hàng</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="Nhập email" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Họ và tên</label>
              <input type="text" placeholder="Nhập họ và tên" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Số điện thoại</label>
              <input type="tel" placeholder="Nhập số điện thoại" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Tỉnh thành</label>
              <select>
                <option>TP Hồ Chí Minh</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Quận huyện</label>
              <select>
                <option>Quận 3</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Phường xã</label>
              <select>
                <option>Phường 14</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Ghi chú (tuỳ chọn)</label>
              <textarea placeholder="Thêm ghi chú nếu có"></textarea>
            </div>
          </form>
        </div>

        {/* Thanh toán */}
        <div className={styles.section}>
          <h2>Thanh toán</h2>
          <form className={styles.paymentForm}>
            <div className={styles.radioGroup}>
              <input type="radio" id="bankTransfer" name="payment" />
              <label htmlFor="bankTransfer">Chuyển khoản qua ngân hàng</label>
            </div>
            <div className={styles.radioGroup}>
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod">Thanh toán khi giao hàng (COD)</label>
            </div>
          </form>
        </div>

        {/* Đơn hàng */}
        <div className={styles.section}>
          <h2>Đơn hàng (6 sản phẩm)</h2>
          <div className={styles.orderItems}>
            {products.map((product) => (
              <div className={styles.orderItem} key={product.id}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productDetails}>
                  <p>{product.quantity} x {product.name}</p>
                  <p>{product.price.toLocaleString()}đ</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <p>Tạm tính: 3.749.000đ</p>
            <p>Phí vận chuyển: 100.000đ</p>
            <h3>Tổng cộng: 3.849.000đ</h3>
          </div>
          <button type="submit" className={styles.orderButton}>
            Đặt Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from "react";
import styles from "./Payment.module.css";
import { useCart } from '../../context/cart.context';
import NavBar from '../../components/Navbar/Navbar';

const DeliveryInformation = () => (
  <div className={styles.deliveryInfo}>
    <h5>Thông tin mua hàng</h5>
    <form className={styles.form}>
      <div className={styles.row}>
        
        <div className={styles.inputContainer}>
          <h6>Họ và tên</h6>
          <input type="text" placeholder="Họ và tên" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <h6>Số điện thoại</h6>
          <input type="text" placeholder="Số điện thoại" className={styles.input} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.inputContainer}>
          <h6>Email</h6>
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.inputContainer}>
          <h6>Địa chỉ</h6>
          <input type="text" placeholder="Địa chỉ" className={styles.input} />
        </div>
      </div>
    </form>
  </div>
);

const ScheduleDelivery = () => (
  <div className={styles.scheduleDelivery}>
    <h5>Ghi chú</h5>
    <textarea placeholder="Điền nội dung vào đây...." className={styles.textarea}></textarea>
  </div>
);

const PaymentMethod = () => (
  <div className={styles.paymentMethod}>
    <h5>Thanh toán</h5>
    <div className={styles.paymentOptions}>
      <label>
        <input type="radio" name="payment" /> Chuyển khoản qua ngân hàng
      </label>
      <label>
        <input type="radio" name="payment" defaultChecked /> Thanh toán khi nhận hàng
      </label>
    </div>
  </div>
);


const Payment = () => {
  const {cartItems, getTotalPrice, getTotalItems} = useCart();
  const subTotal = getTotalPrice();
  const totalItems = getTotalItems();
  const ship_fee = 50000;

  function changePrice(price) {
    let str = price + "";
    let result = "";
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
      result = str[i] + result; 
      count++;
    
      if (count % 3 === 0 && i !== 0) {
        result = '.' + result;
      }
    }
    return result;
  }

  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <DeliveryInformation />
          <ScheduleDelivery />
          <PaymentMethod />
        </div>
        
        <div className={styles.orderSummary}>
          <h5>Đơn hàng ({totalItems} sản phẩm)</h5>
          <div className={styles.orderSummaryContent}>
            <div className={styles.listProduct}>
              {cartItems.map((item) => (
                <div key={item.product.product_id} className={styles.itemProduct}> 
                  <div className={styles.leftItem}>
                    <img src={item.product.imgUrl} alt={item.product.name} className={styles.productImage}/>
                    <div className={styles.nameProduct}>
                      <span><strong>{item.product.name}</strong></span>
                      <span>{changePrice(item.product.price)}đ</span>
                    </div>
                  </div>
                  <div className={styles.rightItem}>
                    <span>x {item.quantity}</span>
                  </div>
                </div>   
              ))} 
            </div>
            <div className={styles.summary}>
              <hr />
              <div>
                <span>Tạm tính:</span>
                <span>{subTotal.toLocaleString()}đ</span>
              </div>
              <div>
                <span>Phí vận chuyển:</span>
                <span>{ship_fee.toLocaleString()}đ</span>
              </div>
              <div>
                <span><strong>Tổng cộng:</strong></span>
                <span><strong>{(subTotal + ship_fee).toLocaleString()}đ</strong></span>
              </div>
            </div>
            <button className={styles.confirmButton}>Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;


import React, { useState } from "react";
import styles from "./Payment.module.css";
import { useCart } from '../../context/cart.context';
import NavBar from '../../components/Navbar/Navbar';
import { use } from "react";
import { createOrderService } from "../../services/OrderService";
import { useNavigate } from "react-router-dom";

const DeliveryInformation = ({value, onChange}) => (
  
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
          <input value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder="Địa chỉ" className={styles.input} required/>
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

const PaymentMethod = ({value, onChange }) => (

  <div className={styles.paymentMethod}>
    <h5>Thanh toán</h5>
    <div className={styles.paymentOptions}>
      <label>
        <input value={'Chuyển khoản'} type="radio" name="payment" onChange={(e)=> onChange(e.target.value)}/> Chuyển khoản qua ngân hàng
      </label>
      <label>
        <input value={'Thanh toán khi nhân hàng'} type="radio" name="payment" defaultChecked onChange={(e)=> onChange(e.target.value)}/> Thanh toán khi nhận hàng
      </label>
    </div>
  </div>
);


const Payment = () => {
  const {cartItems, getTotalPrice, getTotalItems} = useCart();
  const subTotal = getTotalPrice();
  const totalItems = getTotalItems();
  
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [shipFee, setShipFee] = useState(20000 );
  const [paymentMethod, setPaymentMethod] = useState('Thanh toán khi nhân hàng');

  console.log("Address", address, "Payment method: ", paymentMethod, "Ship fee: ", shipFee);
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

  async function createOrder(){
    try {
      
      const response = await createOrderService(address, shipFee, paymentMethod, cartItems);
      
      alert("Tạo đơn hàng thành công");
      navigate('/checkout', { state: { success: true } });
    } catch (error) {
      console.log(error);
      alert("Tạo đơn hàng khóa");
    }
  }

  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <DeliveryInformation value={address} onChange={setAddress} />
          <ScheduleDelivery />
          <PaymentMethod value={paymentMethod} onChange={ setPaymentMethod} />
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
                      <span className={styles.name}><strong>{item.product.name}</strong></span>
                      <span>Số lượng: {item.quantity}</span>
                    </div>
                  </div>
                  <div className={styles.rightItem}>
                    
                    <span>{changePrice(item.product.price)}đ</span>
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
                <span>{shipFee.toLocaleString()}đ</span>
              </div>
              <div>
                <span><strong>Tổng cộng:</strong></span>
                <span><strong>{(subTotal + shipFee).toLocaleString()}đ</strong></span>
              </div>
            </div>
            <button onClick={createOrder} className={styles.confirmButton}>Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;


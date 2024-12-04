
import React, { useReducer } from 'react';
import styles from './Cart.module.css';
import imageLaptop from '../../assets/mac1.jpg';
import trashIcon from '../../assets/trash.png';
import NavBar from '../../components/Navbar/Navbar';

const initialState = [
  {
    id: 1,
    image: 'path-to-image-1.png',
    name: 'Macbook 1',
    price: 144000,
    quantity: 2,
    total: 288000,
  },
  {
    id: 2,
    image: 'path-to-image-2.png',
    name: 'Macbook 2',
    price: 480000,
    quantity: 1,
    total: 480000,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      );
    case 'DECREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
          : item
      );
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const Cart = () => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div>
      <NavBar />
      <div className={styles.cartContainer}>
        <h1 className={styles.title}>Giỏ hàng</h1>
        <div className={styles.cartTable}>
          <div className={styles.cartHeader}>
            <span>Ảnh</span>
            <span>Tên sản phẩm</span>
            <span>Giá </span>
            <span>Số lượng</span>
            <span>Tổng cộng</span>
            <span>Xóa</span>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartRow}>
              <img src={imageLaptop} alt={item.name} className={styles.productImage} />
              <span>{item.name}</span>
              <span>{item.price.toLocaleString()}₫</span>
              <div className={styles.quantity}>
                <button
                  onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } })}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className={styles.numberofitem}>{item.quantity}</span>
                <button
                  onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { id: item.id } })}
                >
                  +
                </button>
              </div>
              <span>{item.total.toLocaleString()}₫</span>
              <img
                src={trashIcon}
                alt="trashicon"
                className={styles.deleteIcon}
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
              />
            </div>
          ))}
        </div>
        <div className={styles.summary}>
          <div>
            <span>Tạm tính:</span>
            <span>{subtotal.toLocaleString()}₫</span>
          </div>
          <div>
            <span>Phí vận chuyển:</span>
            <span>Tính khi thanh toán</span>
          </div>
          <div className={styles.total}>
            <span>Tổng cộng:</span>
            <span>{subtotal.toLocaleString()}₫</span>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.continueButton}>Tiếp tục mua hàng</button>
          <button className={styles.checkoutButton}>Thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

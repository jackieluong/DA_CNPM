// import { useContext } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { ProductContext } from '../../Context/ProductContext';
// import { IoIosRemoveCircleOutline } from 'react-icons/io';
// import styles from './Cart.module.css';

// export default function Cart() {
//   const { cart, invoice, removeCart, setCart, setInvoice } = useContext(ProductContext);
//   const navigate = useNavigate();

//   const placeOrder = () => {
//     setCart([]);
//     setInvoice({ count: 0, subTotal: 0 });
//     navigate('/success');
//   };

//   return (
//     <div className={styles.cartContainer}>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map((product) => (
//             <div key={product.id} className={styles.cartItem}>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className={styles.cartImage}
//               />

//               <div className={styles.productDetails}>
//                 <p className={styles.productName}>{product.name}</p>
//                 <p className={styles.productDescription}>
//                   {product.smallDescription}
//                 </p>
//                 <p className={styles.productQuantity}>
//                   Qty: {product.quantity}
//                 </p>
//               </div>
//               <p className={styles.productPrice}>${product.price}</p>
//               <IoIosRemoveCircleOutline
//                 className={styles.removeIcon}
//                 onClick={() => removeCart(product)}
//               />
//             </div>
//           ))}

//           <div className={styles.invoiceContainer}>
//             <p className={styles.invoiceText}>
//               Subtotal({invoice.count} {invoice.count > 1 ? 'items' : 'item'}): $
//               {invoice.subTotal.toFixed(2)}
//             </p>
//             <button
//               className={styles.placeOrderButton}
//               onClick={placeOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className={styles.emptyCart}>
//           <span>Empty</span>
//           <FaShoppingCart />
//           <Link className={styles.emptyCartLink} to={'/'}>
//             Add Products
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }


// import React from "react";
// import CartItem from '../CartIem';
// import CartSummary from "../CartSummary";
// import styles from "./Cart.module.css";

// const Cart = () => {
//   const cartItems = [
//     { id: 1, name: "Bút bi Monami 153 nét bút 0.7mm", price: 144000, quantity: 2 },
//     { id: 2, name: "Bút sơn công nghiệp SAKURA MARKER hộp 12 cây", price: 480000, quantity: 1 },
//   ];

//   return (
//     <div className={styles.cart}>
//       <h2 className={styles.title}>GIỎ HÀNG CỦA BẠN</h2>
//       <div className={styles.cartTable}>
//         <div className={styles.cartHeader}>
//           <span>Ảnh</span>
//           <span>Tên sản phẩm</span>
//           <span>Giá lẻ</span>
//           <span>Số lượng</span>
//           <span>Tổng cộng</span>
//           <span>Xóa</span>
//         </div>
//         {cartItems.map((item) => (
//           <CartItem key={item.id} item={item} />
//         ))}
//       </div>
//       <CartSummary cartItems={cartItems} />
//       <div className={styles.actions}>
//         <button className={styles.button}>Tiếp tục mua hàng</button>
//         <button className={styles.button}>Cập nhật giỏ hàng</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;




// Cart.jsx
// import {useReducer } from 'react';
// import styles from './Cart.module.css';
// import imageLaptop from '../../assets/mac1.jpg';
// import trashIcon from '../../assets/trash.png';
// import NavBar from '../../components/Navbar/Navbar';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREASE_QUANTITY':
//       return state.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
//           : item
//       );
//     case 'DECREASE_QUANTITY':
//       return state.map((item) =>
//         item.id === action.payload.id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
//           : item
//       );
//     default:
//       return state;
//   }
// };


// const Cart = () => {
//   const cartItems = [
//     {
//       id: 1,
//       image: 'path-to-image-1.png', // Thay bằng đường dẫn ảnh thực tế
//       name: 'Macbook 1',
//       price: 144000,
//       quantity: 2,
//       total: 288000,
//     },
//     {
//       id: 2,
//       image: 'path-to-image-2.png', // Thay bằng đường dẫn ảnh thực tế
//       name: 'Macbook 2',
//       price: 480000,
//       quantity: 1,
//       total: 480000,
//     },
//   ];

//   const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
//   const [cartItems, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <NavBar/>
//       <div className={styles.cartContainer}>
//       <h1 className={styles.title}>Giỏ hàng</h1>
//       <div className={styles.cartTable}>
//         <div className={styles.cartHeader}>
//           <span>Ảnh</span>
//           <span>Tên sản phẩm</span>
//           <span>Giá </span>
//           <span>Số lượng</span>
//           <span>Tổng cộng</span>
//           <span>Xóa</span>
//         </div>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.cartRow}>
//             <img src={imageLaptop} alt={item.name} className={styles.productImage} />
//             <span>{item.name}</span>
//             <span>{item.price.toLocaleString()}₫</span>
//             <div className={styles.quantity}>
//                 <button
//                   onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } })}
//                   disabled={item.quantity === 1}
//                 >
//                   -
//                 </button>
//                 <span className={styles.numberofitem}>{item.quantity}</span>
//                 <button
//                   onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { id: item.id } })}
//                 >
//                   +
//                 </button>
//             </div>
//             <span>{item.total.toLocaleString()}₫</span>
//             <img src={trashIcon} alt="trashicon" className={styles.deleteIcon}/>
            
//           </div>
//         ))}
//       </div>
//       <div className={styles.summary}>
//         <div>
//           <span>Tạm tính:</span>
//           <span>{subtotal.toLocaleString()}₫</span>
//         </div>
//         <div>
//           <span>Phí vận chuyển:</span>
//           <span>Tính khi thanh toán</span>
//         </div>
//         <div className={styles.total}>
//           <span>Tổng cộng:</span>
//           <span>{subtotal.toLocaleString()}₫</span>
//         </div>
//       </div>
//       <div className={styles.actions}>
//         <button className={styles.continueButton}>Tiếp tục mua hàng</button>
//         <button className={styles.checkoutButton}>Thanh toán</button>
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default Cart;


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

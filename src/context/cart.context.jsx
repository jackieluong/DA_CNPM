import { createContext, useContext, useEffect, useState } from "react";
import { addToCartService, getCartItems, removeFromCartService, updateQuantityService } from "../services/cartService";
import { useAuth } from "./auth.context";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const {auth} = useAuth();
  useEffect(() => {

    const fetchCartItems = async() =>{
        const data = await getCartItems();
        setCartItems(data);
    }
    if(auth.isAuthenticated){
      fetchCartItems();
    }
   
  },[])
  const addToCart = async (product, quantity = 1) => {
    
    const existingItem = cartItems.find(
      (item) => item.product.product_id === product.product_id
    );
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.product.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { product, quantity: 1 },
      ]);
    }

    const response = await addToCartService(product.product_id, quantity);
    console.log(response);

  };

  const removeFromCart = async(id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.product_id != id)
    );
    const response = await removeFromCartService(id);
    console.log(response);

  };
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const getTotalItems = () =>{
    return cartItems.reduce(
        (total, item) => total + item.quantity, 0
    )
  }
  const incQuantity = async (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.product_id === id ? {...item,quantity: item.quantity + 1} : item
      )
    );
    const quantity = 1;
    const response = await updateQuantityService(id, quantity);
    console.log(response);
  };

  const decQuantity =async (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.product_id == id ? {...item, quantity: Math.max(item.quantity - 1, 1)} : item
      )
    );
    const quantity = -1;
    const response = await updateQuantityService(id, quantity);
    console.log(response);
  };
  const value = {
    cartItems,
    removeFromCart,
    incQuantity,
    decQuantity,
    getTotalPrice,
    addToCart,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);

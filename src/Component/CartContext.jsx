import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCart;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const increaseQuantity = (item) => {
    setCartItems((prevItems) => prevItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ));
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) => prevItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
        : cartItem
    ));
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

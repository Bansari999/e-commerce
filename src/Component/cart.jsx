import React, { useContext } from 'react';
import CartContext from './CartContext';
import ShoppingCart from './ShoppingCart';

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="bg-gray-100 min-h-screen">
      <ShoppingCart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default Cart;

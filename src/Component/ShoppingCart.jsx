import React, { useState } from "react";

export default function ShoppingCart({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  ).toFixed(2);

  const handleCheckout = () => {
    // Logic for checking out can be added here
    setCheckoutSuccess(true);
    setTimeout(() => setCheckoutSuccess(false), 3000); // Auto-hide after 3 seconds
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Shopping Cart</h2>
      <div className="divide-y divide-gray-200">
        {cartItems.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <h3 className="text-lg">Your cart is empty</h3>
            <p className="mt-2">Add items to your cart to see them here.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 hover:bg-gray-100">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md border border-gray-300" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: {item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decreaseQuantity(item)} className="text-gray-500 hover:text-gray-700 border rounded px-2">-</button>
                <span className="text-lg text-gray-900">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item)} className="text-gray-500 hover:text-gray-700 border rounded px-2">+</button>
                <button onClick={() => removeFromCart(item)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-semibold text-gray-900">Total Amount: ${totalAmount}</h3>
          <button onClick={handleCheckout} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}

      {checkoutSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold text-green-600">Successfully Checked Out!</h3>
            <p className="mt-2 text-gray-700">Thank you for your purchase!</p>
            <button onClick={() => setCheckoutSuccess(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

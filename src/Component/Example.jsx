import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import ShoppingCart from "./ShoppingCart"; // Assuming ShoppingCart component is correctly imported

export default function Example({ setOpen, selectedProduct, cartItems, setCartItems }) {
  const [quantity, setQuantity] = useState(1);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setOpen(false); // Close the dialog after adding product
  };

  // Function to remove an item from the cart
  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  // Function to increase quantity of an item in the cart
  const increaseQuantity = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Function to decrease quantity of an item in the cart
  const decreaseQuantity = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      removeFromCart(product);
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
    }
  };

  // Calculate subtotal of the cart
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price.slice(1)) * item.quantity;
  }, 0).toFixed(2);

  return (
    <Dialog open={true} onClose={() => setOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
      <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />

      <DialogPanel className="relative bg-white shadow-xl max-w-md mx-auto mt-10 rounded-lg p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-lg font-medium text-gray-900">Shopping Cart</DialogTitle>
          {/* Show XIcon only when the dialog is open */}
          { setOpen && (
            <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-gray-200">
              <XIcon className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Close panel</span>
            </button>
          )}
        </div>

        {/* Render the ShoppingCart component passing props */}
        <ShoppingCart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />

        <div className="mt-6 flex justify-between items-center">
          <p className="text-base font-medium text-gray-900">Subtotal</p>
          <p className="text-base font-medium text-gray-900">${subtotal}</p>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="block w-full bg-indigo-600 py-2 px-4 text-center text-white rounded-md font-medium hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

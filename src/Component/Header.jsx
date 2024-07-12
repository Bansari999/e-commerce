import React, { useEffect } from "react";
import { useContext } from "react";
import CartContext from "./CartContext";

function Header() {

  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo or site title */}
        <div className="text-xl font-bold">
          <a href="/" className="text-white hover:text-gray-300">
            Your Logo
          </a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="/" className="text-white hover:text-gray-300 font-bold">
                Home
              </a>
            </li>
            {/* <li>
              <a href="/products" className="text-white hover:text-gray-300 font-bold">
                Products
              </a>
            </li> */}
            <li>
              <a href="/cart" className="text-white hover:text-gray-300">
                <img
                  src="/Icons/cart.svg"
                  alt="Cart Icon"
                  className="h-10 w-10 inline-block"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

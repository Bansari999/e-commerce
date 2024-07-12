import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "./CartContext";

const products = [
  { id: 1, name: "Product 1", price: "$99.99", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
  { id: 2, name: "Product 2", price: "$129.99", image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
  { id: 3, name: "Product 3", price: "$89.99", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
  { id: 4, name: "Product 4", price: "$79.99", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" },
  { id: 5, name: "Product 5", price: "$59.99", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" },
  { id: 6, name: "Product 6", price: "$49.99", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" },
  { id: 7, name: "Product 7", price: "$69.99", image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" },
  { id: 8, name: "Product 8", price: "$109.99", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { id: 9, name: "Product 9", price: "$79.99", image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
  { id: 10, name: "Product 10", price: "$89.99", image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" },
  { id: 11, name: "Product 11", price: "$99.99", image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" },
  { id: 12, name: "Product 12", price: "$69.99", image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" },
  { id: 13, name: "Product 13", price: "$119.99", image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" },
  { id: 14, name: "Product 14", price: "$129.99", image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" },
  { id: 15, name: "Product 15", price: "$149.99", image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" },
  { id: 16, name: "Product 16", price: "$79.99", image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" },
  { id: 17, name: "Product 17", price: "$69.99", image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" },
  { id: 18, name: "Product 18", price: "$99.99", image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" },
  { id: 19, name: "Product 19", price: "$49.99", image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" },
  { id: 20, name: "Product 20", price: "$79.99", image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" },
];

function ProductList() {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });

    setSuccessMessage(`${product.name} added successfully!`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="bg-gray-100 relative">
      <div className="max-w-8xl mx-auto py-8 sm:px-6 lg:px-7">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Products</h2>
        
        <div className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 ${successMessage ? "block" : "hidden"}`}>
          <div className="bg-white shadow-lg rounded-lg p-5">
            <div className="mb-4 text-green-600 text-center font-bold">{successMessage}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 mx-4 sm:grid-cols-5 md:grid-cols-4 gap-20">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center items-center h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-auto object-contain p-8"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-700">{product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="mt-4 block w-full px-4 py-2 bg-gray-900 text-white transition-colors hover:bg-gray-700 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import ProductList from './Component/ProductList';
import ProductDetails from './Component/ProductDetail';
import ShoppingCart from './Component/ShoppingCart';
import Footer from './Component/Footer';
import Example from './Component/Example';
import Cart from './Component/cart';
import { CartProvider } from './Component/CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/example" element={<Example />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import ProductsPage from "../components/Products/ProductsPage";
import SingleProductPage from "../components/SingleProduct/SingleProductPage";
import CartPage from "../components/Cart/CartPage";
import MyOrderPage from "../components/MyOrder/MyOrderPage";
import LoginPage from "../components/Authentication/LoginPage";
import SignupPage from "../components/Authentication/SignupPage";
import Logout from "./Authentication/Logout";
const Routing = ({ addToCart }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route
        path="/products/:id"
        element={<SingleProductPage addToCart={addToCart} />}
      />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/myorders" element={<MyOrderPage />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routing;

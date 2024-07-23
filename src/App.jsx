import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jswUser = jwtDecode(jwt);
      if (Date.now() >= jswUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(jswUser);
      }
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const findIndex = updatedCart.findIndex(
      (item) => item.product._id === product.produ3ct_id
    );
    
    if (findIndex == -1) {
      updatedCart.push({ product: product, quantity: quantity });
    } else {
      updatedCart[findIndex].quantity += quantity;
    }
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <Navbar user={user} cartCount={cart.length} />
      <main>
        <Routing addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App;

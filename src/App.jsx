import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing";

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
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

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;

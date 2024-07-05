import React, { useEffect, useState } from "react";
import apiClient from "../../../utiles/api-client";
import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductsSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/category");
      setCategories(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("From Category");
  console.log(categories);
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      {error && <em className="error_em">{error.message}</em>}
      <div className="category_links">
        {categories.map((category) => (
          <LinkWithIcon
            key={category._id}
            title={category.name}
            link={`products?category=${category.name}`}
            emoji={`http://localhost:5098/category/${category.image}`}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;

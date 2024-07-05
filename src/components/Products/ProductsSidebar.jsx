import React, { useEffect, useState } from "react";
import apiClient from "../../../utiles/api-client";
import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../../hooks/useData";

const ProductsSidebar = () => {
  const { data, error } = useData("/category");

  console.log("From Category");
  console.log(data);

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      {error && <em className="error_em">{error.message}</em>}
      <div className="category_links">
        {data?.map((category) => (
          <LinkWithIcon
            key={category._id}
            title={category.name}
            link={`/products?category=${category.name}`}
            emoji={`http://localhost:5098/category/${category.image}`}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;

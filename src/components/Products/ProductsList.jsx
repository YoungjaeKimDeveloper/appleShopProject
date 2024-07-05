import React, { useEffect, useState } from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import apiClient from "../../../utiles/api-client";
import useData from "../../../hooks/useData";

const ProductsList = () => {
  const { data, error } = useData("/products");

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="error_message">{error}</em>}
        {data?.products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;

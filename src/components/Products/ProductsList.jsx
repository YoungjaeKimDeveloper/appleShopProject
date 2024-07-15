import React, { useEffect, useState } from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import apiClient from "../../../utiles/api-client";
import useData from "../../../hooks/useData";
import { useSearchParams } from "react-router-dom";
import { object } from "zod";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");

  const handleChange = () => {
    const currentParams = Object.fromEntries([...search]);

    setSearch({ ...currentParams, page: 2 });
  };
  const { data, error } = useData(
    "/products",
    {
      params: {
        category: category,
        page: page,
      },
    },
    [category, page]
  );

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
      <button onClick={() => handleChange(page)}>Next Page</button>
    </section>
  );
};

export default ProductsList;

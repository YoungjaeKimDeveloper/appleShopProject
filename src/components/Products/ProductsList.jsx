import React, { useEffect, useState } from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import apiClient from "../../../utiles/api-client";
import useData from "../../../hooks/useData";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const page = search.get("page");
  const category = search.get("category");
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
  const handlePage = (page) => {
    const currentParams = Object.fromEntries(search);
    setSearch({ ...currentParams, page: page });
  };

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
      <Pagination
        totalPage={data?.totalProducts}
        perPage={data?.postPerPage}
        onClick={handlePage}
        currentPage={page}
      />
    </section>
  );
};

export default ProductsList;

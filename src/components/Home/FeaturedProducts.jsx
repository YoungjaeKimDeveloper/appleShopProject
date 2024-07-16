import React, { useEffect, useState } from "react";

import "./FeaturedProducts.css";
import ProductCard from "../Products/ProductCard";
import apiClient from "../../../utiles/api-client";

const FeaturedProducts = () => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/products");
      setdata(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="featured_products">
      <h2>Featured Products</h2>

      <div className="align_center featured_products_list">
        {data?.slice(0, 3).map((datas) => (
          <ProductCard product={datas} key={datas._id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

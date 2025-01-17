import React from "react";

import "./ProductCard.css";
import iphone from "../../assets/iphone.jpg";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${product?._id}`}>
          <img
            src={`http://localhost:5098/products/${product?.images[0]}`}
            alt="product image"
          />
        </NavLink>
      </div>

      <div className="product_details">
        <h3 className="product_price">${product?.price}</h3>
        <p className="product_title">{product?.title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} alt="star" /> {product?.reviews.rate}
            </p>
            <p className="product_review_count">{product?.reviews.count}</p>
          </div>

          <button className="add_to_cart">
            {product?.stock >= 1 && <img src={basket} alt="basket button" />}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;

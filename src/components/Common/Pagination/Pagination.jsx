import React from "react";
import "./Pagination.css";
const Pagination = ({ totalPage, perPage, onClick, currentPage }) => {
  let pages = [];
  let pages2 = [];
  for (let i = 1; i <= totalPage / perPage; i++) {
    pages.push(i);
  }
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <button
          className={
            currentPage == page ? "pagination_page actvie" : "pagination_page"
          }
          key={page}
          onClick={() => onClick(page)}
        >
          {page}
        </button>
      ))}
    </ul>
  );
};

export default Pagination;

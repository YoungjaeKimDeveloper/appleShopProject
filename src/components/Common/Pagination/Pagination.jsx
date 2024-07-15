import React from "react";
import "./Pagination.css";
const Pagination = ({ totalPage, perPage, onClick }) => {
  let pages = [];
  for (let i = 1; i <= totalPage / perPage; i++) {
    pages.push(i);
  }
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <button
          className="pagination_page"
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

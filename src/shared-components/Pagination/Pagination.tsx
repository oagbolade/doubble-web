import React from "react";

const Pagination = ({ postPerpage, totalPost }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          <li key={number}>
            <a href="!#">{number}</a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

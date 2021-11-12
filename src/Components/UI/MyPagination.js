import React from "react";
import { getPageArray } from "../utils/pages";
import MyButton from "./button";

const MyPagination = ({ page, totalPage, changePage }) => {
  const pageArray = getPageArray(totalPage);

  return (
    <>
      {pageArray.map((item) => (
        <MyButton
          key={item}
          onClick={() => changePage(item)}
          className={
            page === item ? "btn btn-primary" : "btn btn-outline-primary"
          }
        >
          {item}
        </MyButton>
      ))}
    </>
  );
};

export default MyPagination;

import React from "react";
import MyButton from "../UI/button";

const TableItem = ({ post, number, removePost }) => {
  return (
    <div className="d-flex justify-content-between  border p-2 my-2">
      <p className="mb-0">{number}</p>
      <p className="mb-0">{post.title}</p>
      <p className="mb-0">{post.stack}</p>
      <p className="mb-0">
        <MyButton className={"btn btn-danger"} onClick={() => removePost(post)}>
          Delete
        </MyButton>
      </p>
    </div>
  );
};

export default TableItem;

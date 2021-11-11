import React from "react";
import MyButton from "../UI/button";

const TableItem = ({ post, number, removePost }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border p-2 my-2">
      <div>
        <span className="mb-0 fw-bold d-flex">
          {number}.<p className="mb-0"> {post.title}</p>
        </span>
        <p className="mb-0 lead fs-6 px-3 py-2">{post.body}</p>
      </div>
      <p className="mb-0">
        <MyButton
          className={"btn btn-outline-danger"}
          onClick={() => removePost(post)}
        >
          Delete
        </MyButton>
      </p>
    </div>
  );
};

export default TableItem;

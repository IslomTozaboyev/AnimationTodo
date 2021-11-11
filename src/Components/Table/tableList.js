import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TableHeader from "./tableHeader";
import TableItem from "./tableItem";

const TableList = ({ posts, removePost }) => {
  if (!posts.length) {
    return (
      <h6 className="text-center text-danger fw-bold py-5">
        You should add some Post
      </h6>
    );
  }
  return (
    <>
      <h4 className="text-center fw-bold my-3 text-secondary">
        Favourite Programming Language
      </h4>
      <TableHeader />
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="my-node">
            <TableItem removePost={removePost} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default TableList;

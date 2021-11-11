import React, { useMemo, useState } from "react";
import styled from "styled-components";
import PostForm from "../Form/PostForm";
import SearchAndFilter from "../SearchAndFilter.js/SearchAndFilter";
import TableList from "./tableList";

const TableWrapper = styled.div``;

const Table = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", stack: "fullStack" },
    { id: 2, title: "Phyton", stack: "kiber" },
    { id: 3, title: "C#", stack: "mern-Stack" },
    { id: 4, title: "Goo", stack: "backend" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const SortedPosts = useMemo(() => {
    console.log("render");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return SortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, SortedPosts]);

  return (
    <TableWrapper>
      <PostForm createPost={createPost} />
      <SearchAndFilter filter={filter} setFilter={setFilter} />
      <TableList removePost={removePost} posts={sortedAndSearchPosts} />
    </TableWrapper>
  );
};

export default Table;

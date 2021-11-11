import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostServisecApi from "../Api/PostServisecApi";
import PostForm from "../Form/PostForm";
import { usePosts } from "../hooks/useCreatePosts";
import SearchAndFilter from "../SearchAndFilter.js/SearchAndFilter";
import MyButton from "../UI/button";
import MyModal from "../UI/MyModal";
import TableList from "./tableList";

const TableWrapper = styled.div``;

const Table = () => {
  const [posts, setPosts] = useState([]);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await PostServisecApi.getServerAll();
    setPosts(posts);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <TableWrapper>
      <MyButton className="btn btn-primary mt-4" onClick={toggleModal}>
        Add Post
      </MyButton>

      <MyModal modal={modal} toggleModal={toggleModal}>
        <PostForm createPost={createPost} />
      </MyModal>

      <SearchAndFilter filter={filter} setFilter={setFilter} />
      <TableList removePost={removePost} posts={sortedAndSearchPosts} />
    </TableWrapper>
  );
};

export default Table;

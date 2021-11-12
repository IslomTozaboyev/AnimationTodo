import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostServisecApi from "../Api/PostServisecApi";
import PostForm from "../Form/PostForm";
import { usePosts } from "../hooks/useCreatePosts";
import { UseFetching } from "../hooks/useFetching";
import SearchAndFilter from "../SearchAndFilter.js/SearchAndFilter";
import MyButton from "../UI/button";
import MyLoader from "../UI/MyLoader";
import MyModal from "../UI/MyModal";
import MyPagination from "../UI/MyPagination";
import { getPageCount } from "../utils/pages";
import TableList from "./tableList";

const TableWrapper = styled.div``;

const Table = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isLoading] = UseFetching(async () => {
    const response = await PostServisecApi.getServerAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPage(getPageCount(totalCount, limit));
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <TableWrapper>
      <MyButton className="btn btn-primary mt-4" onClick={toggleModal}>
        Add Post
      </MyButton>
      <MyModal modal={modal} toggleModal={toggleModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <SearchAndFilter filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <MyLoader />
        </div>
      ) : (
        <TableList removePost={removePost} posts={sortedAndSearchPosts} />
      )}

      <ul className="pagination">
        <MyPagination
          page={page}
          changePage={changePage}
          totalPage={totalPage}
        />
      </ul>
    </TableWrapper>
  );
};

export default Table;

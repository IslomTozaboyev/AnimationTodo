import React, { useState } from "react";
import MyButton from "../UI/button";
import MyInput from "../UI/myInput";

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: "", stack: "" });

  const addPost = (e) => {
    e.preventDefault();

    if (
      (post.title.length === 0 && post.stack.length === 0) ||
      (post.title.length === 0 && post.stack.length !== 0) ||
      (post.title.length !== 0 && post.stack.length === 0)
    ) {
      return alert("Please enter the post in full");
    }

    const newPost = { ...post, id: Date.now() };
    createPost(newPost);

    setPost({ title: "", stack: "" });
  };

  return (
    <form>
      <h4 className="text-center fw-bold py-3">Create tour first post</h4>
      <MyInput
        type="text"
        className="form-control"
        placeholder="Programming language"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />

      <MyInput
        type="text"
        className="form-control my-3"
        placeholder="Enter your favourite stack"
        value={post.stack}
        onChange={(event) => setPost({ ...post, stack: event.target.value })}
      />

      <MyButton className={"btn btn-primary"} onClick={addPost}>
        Add post
      </MyButton>
    </form>
  );
};

export default PostForm;

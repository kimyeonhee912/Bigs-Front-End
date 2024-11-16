import React from "react";
import "./HomeMain.css";
import { Post } from "./Post";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기

export const HomeMain = () => {
  const navigate = useNavigate();

  const handleAddPost = () => {
    navigate("/create-post"); // 버튼 클릭 시 "/create-post"로 이동
  };

  return (
    <main className="home-main">
      <h2>Posts</h2>
      <div className="post-container">
        <button className="button add-post" onClick={handleAddPost}>
          Add New Post
        </button>
        <Post />
        <Post />

        <div className="pagination">
          <button className="button">&lt; Prev</button>
          <span>Page 1 of 10</span>
          <button className="button">Next &gt;</button>
        </div>
      </div>
    </main>
  );
};

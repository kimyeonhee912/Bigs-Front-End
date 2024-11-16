import React from "react";
import "./HomeMain.css";
import { Post } from "./Post";

export const HomeMain = () => {
  return (
    <main className="home-main">
      <h2>Posts</h2>
      <div className="post-container">
        <button className="button add-post">Add New Post</button>
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

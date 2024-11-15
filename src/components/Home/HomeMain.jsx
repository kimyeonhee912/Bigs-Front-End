import React from "react";
import "./HomeMain.css";

export const HomeMain = () => {
  return (
    <main className="home-main">
      <h2>Posts</h2>
      <div className="post-container">
        <button className="button add-post">Add New Post</button>
        <div className="post-box">
          <div className="post-title-btn-container">
            <div className="post-title-user-container">
              <h3>Post Title</h3>
              <span className="user-name">John Doe</span>{" "}
              {/* 사용자 이름 추가 */}
            </div>
            <div className="post-actions">
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </div>
          </div>

          <p>This is a sample post description.</p>
        </div>

        <div className="pagination">
          <button className="button">&lt; Prev</button>
          <span>Page 1 of 10</span>
          <button className="button">Next &gt;</button>
        </div>
      </div>
    </main>
  );
};

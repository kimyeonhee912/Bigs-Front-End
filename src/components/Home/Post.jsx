import React from "react";
import "./Post.css";

export const Post = () => {
  return (
    <div className="post-box">
      <div className="post-title-btn-container">
        <div className="post-title-user-container">
          <h3>Post Title</h3>
          <span className="user-name">John Doe</span> {/* 사용자 이름 추가 */}
        </div>
        <div className="post-actions">
          <button className="button">Edit</button>
          <button className="button">Delete</button>
        </div>
      </div>

      <p>This is a sample post description.</p>
    </div>
  );
};

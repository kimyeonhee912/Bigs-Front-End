import React from "react";
import "./Post.css";

export const Post = ({ title, content, category }) => {
  return (
    <div className="post-box">
      <div className="post-title-btn-container">
        <div className="post-title-user-container">
          <h3>{title}</h3>
          <span className="user-name">{category}</span>{" "}
          {/* 일단 카테고리 가져오기 -> 유저 정보에 대한 거 가져와야 함. */}
        </div>
        <div className="post-actions">
          <button className="button">Edit</button>
          <button className="button">Delete</button>
        </div>
      </div>

      <p>{content}</p>
    </div>
  );
};

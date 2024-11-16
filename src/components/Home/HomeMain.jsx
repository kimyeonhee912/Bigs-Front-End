import React, { useState } from "react";
import "./HomeMain.css";
import { Post } from "./Post";
import { useNavigate } from "react-router-dom";

export const HomeMain = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const posts = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1}`,
    content: `Content for post ${i + 1}`,
  }));

  // 페이지별로 보여줄 데이터 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 이동 핸들러
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage))
      setCurrentPage(currentPage + 1);
  };

  const handleAddPost = () => {
    navigate("/create-post");
  };

  return (
    <main className="home-main">
      <h2>Posts</h2>
      <div className="post-container">
        <button className="button add-post" onClick={handleAddPost}>
          Add New Post
        </button>
        {currentPosts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            category={post.category}
          />
        ))}

        <div className="pagination">
          <button
            className="button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt; Prev
          </button>
          <span>
            Page {currentPage} of {Math.ceil(posts.length / postsPerPage)}
          </span>
          <button
            className="button"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </main>
  );
};

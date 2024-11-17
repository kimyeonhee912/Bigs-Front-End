import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomeMain.css";
import { Post } from "./Post";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../config/token";

export const HomeMain = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const postsPerPage = 10;

  // 페이지별로 보여줄 데이터 계산
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // 페이지 이동 핸들러
  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleAddPost = () => {
    navigate("/create-post");
  };

  // 게시글 데이터 요청
  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://front-mission.bigs.or.kr/boards?page=${currentPage}&size=${postsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data.content);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("게시글을 가져오는데 실패했습니다.", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <main className="home-main">
      <h2>Posts</h2>
      <div className="post-container">
        {isLoggedIn && (
          <button className="button add-post" onClick={handleAddPost}>
            글 작성
          </button>
        )}
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            category={post.boardCategory}
            imageUrl={post.imageUrl}
          />
        ))}

        <div className="pagination">
          <button
            className="button"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            &lt; Prev
          </button>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            className="button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </main>
  );
};

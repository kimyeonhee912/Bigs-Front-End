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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Sample Post Title",
      content: "This is a sample post content for testing.",
      boardCategory: "NOTICE",
      imageUrl: "",
      createdAt: "2024-11-12T10:00:00.000Z",
    },
  ]); // 초기 목데이터 추가
  const [totalPages, setTotalPages] = useState(1); // 페이지 1로 설정
  const postsPerPage = 10;

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handleAddPost = () => {
    navigate("/create-post");
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // 게시글 데이터 요청
  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);

    // 서버 요청 대신 mock데이터로 변경
    /*
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
    */
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
            id={post.id}
            title={post.title}
            content={post.content}
            category={post.boardCategory}
            onDelete={handleDeletePost} // 삭제 핸들러 전달
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

import React, { useState } from "react";
import "./PostCreatePage.css";
import axios from "axios";
import { getToken } from "../../config/token";

const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("NOTICE");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();

    if (!title || !content) {
      setErrorMessage("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      const requestData = { title, content, category };
      const response = await axios.post(
        "https://front-mission.bigs.or.kr/boards",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("게시물 생성 성공:", response.data);
        setTitle("");
        setContent("");
        setCategory("NOTICE");
        setErrorMessage("");
        alert("게시물이 성공적으로 작성되었습니다.");
      }
    } catch (error) {
      console.error("게시물 생성 실패:", error);
      setErrorMessage("게시물 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="post-create-container">
      <h2 className="post-create-header">게시물 작성</h2>
      <form className="post-create-Form" onSubmit={handleSubmit}>
        <div className="post-create-label-input">
          <label className="post-create-label" htmlFor="category">
            카테고리
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="post-create-input"
          >
            <option value="NOTICE">공지사항</option>
            <option value="NEWS">뉴스</option>
            <option value="EVENT">이벤트</option>
          </select>
        </div>

        <div className="post-create-label-input">
          <label className="post-create-label" htmlFor="title">
            제목
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="post-create-input"
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        <div className="post-create-label-input">
          <label className="post-create-label" htmlFor="content">
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="post-create-input"
            placeholder="내용을 입력하세요"
            rows="5"
            required
          />
        </div>

        {errorMessage && (
          <div className="post-create-error">{errorMessage}</div>
        )}

        <button type="submit" className="post-create-button">
          게시물 작성
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;

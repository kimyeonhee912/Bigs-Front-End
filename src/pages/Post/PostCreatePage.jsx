import React, { useState } from "react";
import "./PostCreatePage.css";

const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("NOTICE");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setErrorMessage("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const postData = {
      title,
      content,
      category,
    };

    console.log("게시물 생성:", postData);

    // 성공적으로 제출 후 페이지 리셋
    setTitle("");
    setContent("");
    setCategory("NOTICE");
    setErrorMessage("");
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

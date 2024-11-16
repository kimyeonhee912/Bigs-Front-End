import React, { useState } from "react";
import "./LoginForm.css";

export const LoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    closeModal();
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-header">로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="login-form-label" htmlFor="email">
            이메일
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-form-input"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
        <div className="mb-4">
          <label className="login-form-label" htmlFor="password">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-input"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        {errorMessage && <div className="login-form-error">{errorMessage}</div>}

        <button type="submit" className="login-form-button">
          로그인
        </button>
      </form>

      <div className="login-form-footer">
        계정이 없으신가요? <a href="#!">회원가입</a>
      </div>
    </div>
  );
};

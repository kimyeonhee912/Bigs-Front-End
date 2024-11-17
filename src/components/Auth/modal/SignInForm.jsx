import React, { useState } from "react";
import "./SignupForm.css";
import axios from "axios";

export const SignupForm = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    // 회원가입 API 요청
    const formData = { username, name, password, confirmPassword };
    try {
      const response = await axios.post(
        "https://front-mission.bigs.or.kr/auth/signup",
        formData
      );

      // 성공 시
      setErrorMessage("");
      closeModal();
    } catch (error) {
      const errorResponse =
        error.response?.data?.message || "회원가입 요청에 실패했습니다.";
      setErrorMessage(errorResponse);
    }
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-header">회원가입</h2>
      <form onSubmit={handleSignup}>
        <div className="signup-form-lable-input">
          <label className="signup-form-label" htmlFor="username">
            이메일
          </label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-form-input"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>

        <div className="signup-form-lable-input">
          <label className="signup-form-label" htmlFor="name">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-form-input"
            placeholder="이름을 입력하세요"
            required
          />
        </div>

        <div className="signup-form-lable-input">
          <label className="signup-form-label" htmlFor="password">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-form-input"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        <div className="signup-form-lable-input">
          <label className="signup-form-label" htmlFor="confirmPassword">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-form-input"
            placeholder="비밀번호를 다시 입력하세요"
            required
          />
        </div>

        {errorMessage && (
          <div className="signup-form-error">{errorMessage}</div>
        )}

        <button type="submit" className="signup-form-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

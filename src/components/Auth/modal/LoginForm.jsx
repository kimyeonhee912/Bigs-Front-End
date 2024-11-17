import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";

export const LoginForm = ({ closeModal, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post(
        "https://front-mission.bigs.or.kr/auth/refresh",
        { refreshToken }
      );

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      if (accessToken && newRefreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        console.log("리프레시 토큰으로 새로운 액세스 토큰을 받았습니다.");
        return accessToken;
      } else {
        throw new Error("새로운 토큰을 받을 수 없습니다.");
      }
    } catch (error) {
      console.error("리프레시 토큰 요청 실패:", error);
      setErrorMessage(
        "리프레시 토큰 요청에 실패했습니다. 다시 로그인 해주세요."
      );
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "https://front-mission.bigs.or.kr/auth/signin",
        { username: email, password }
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);

      const { accessToken, refreshToken } = response.data;

      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("로그인 성공: 토큰이 저장되었습니다.");
        onLoginSuccess();
        closeModal();

        setInterval(async () => {
          const refreshToken = localStorage.getItem("refreshToken");
          if (refreshToken) {
            await refreshAccessToken(refreshToken);
          }
        }, 3600000); //1시간마다
      } else {
        setErrorMessage("토큰이 없습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (newAccessToken) {
          onLoginSuccess();
          closeModal();
        }
      } else {
        setErrorMessage(
          "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요."
        );
      }
    }
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

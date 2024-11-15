import React from "react";
import "./HomeHeader.css";

export const HomeHeader = () => {
  return (
    <header className="home-header">
      <p>Bigs</p>
      <div className="auth-buttons">
        <button className="button">Sign Up</button>
        <button className="button">Log In</button>
      </div>
    </header>
  );
};

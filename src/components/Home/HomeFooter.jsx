import React from "react";
import "./HomeFooter.css";
export const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <p>Bigs Fe test website</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>yyeonhee912@naver.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 yeonhee. All rights reserved.</p>
      </div>
    </footer>
  );
};

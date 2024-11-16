import React from "react";
import "./HomeFooter.css";
export const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <p>This is a sample website created with React.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

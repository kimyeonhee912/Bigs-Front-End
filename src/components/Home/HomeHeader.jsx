import React, { useState, useEffect } from "react";
import "./HomeHeader.css";
import { User } from "../Auth/User";
import { useNavigate } from "react-router-dom";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="home-header">
        <p onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          Bigs
        </p>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <button className="button" onClick={handleLogout}>
              LogOut
            </button>
          ) : (
            <>
              <button
                className="button"
                onClick={() => {
                  openModal();
                  setCurrentForm("signup");
                }}
              >
                Sign Up
              </button>
              <button
                className="button"
                onClick={() => {
                  openModal();
                  setCurrentForm("login");
                }}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </header>
      <User
        isModalOpen={isModalOpen}
        onModalClose={closeModal}
        currentForm={currentForm}
        onLoginSuccess={() => setIsLoggedIn(true)}
      />
    </>
  );
};

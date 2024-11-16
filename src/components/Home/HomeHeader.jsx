import React, { useState } from "react";
import "./HomeHeader.css";
import { AuthModal } from "../Auth/modal/AuthModal";

export const HomeHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <header className="home-header">
        <p>Bigs</p>
        <div className="auth-buttons">
          <button
            className="button"
            onClick={() => {
              openModal();
            }}
          >
            Sign Up
          </button>
          <button
            className="button"
            onClick={() => {
              openModal();
            }}
          >
            Log In
          </button>
        </div>
      </header>
      <AuthModal isModalOpen={isModalOpen} onModalClose={closeModal} />
    </>
  );
};

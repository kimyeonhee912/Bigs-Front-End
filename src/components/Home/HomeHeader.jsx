import React, { useState } from "react";
import "./HomeHeader.css";
import { User } from "../Auth/User";

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
        </div>
      </header>
      <User
        isModalOpen={isModalOpen}
        onModalClose={closeModal}
        currentForm={currentForm}
      />
    </>
  );
};

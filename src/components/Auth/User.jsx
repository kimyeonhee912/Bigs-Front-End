import React, { useState } from "react";
import { LoginForm } from "./modal/LoginForm";
import { AuthModal } from "./modal/AuthModal";
import { SignupForm } from "./modal/SignInForm";

export const User = ({ isModalOpen, onModalClose, currentForm }) => {
  return (
    <div>
      <AuthModal isModalOpen={isModalOpen} onModalClose={onModalClose}>
        {currentForm === "login" ? (
          <LoginForm closeModal={onModalClose} />
        ) : (
          <SignupForm closeModal={onModalClose} />
        )}
      </AuthModal>
    </div>
  );
};

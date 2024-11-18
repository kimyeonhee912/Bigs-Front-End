import React from "react";
import { LoginForm } from "./modal/LoginForm";
import { AuthModal } from "./modal/AuthModal";
import { SignupForm } from "./modal/SignInForm";

export const User = ({
  isModalOpen,
  onModalClose,
  currentForm,
  onLoginSuccess,
}) => {
  return (
    <div>
      <AuthModal isModalOpen={isModalOpen} onModalClose={onModalClose}>
        {currentForm === "login" ? (
          <LoginForm
            closeModal={onModalClose}
            onLoginSuccess={onLoginSuccess}
          />
        ) : (
          <SignupForm closeModal={onModalClose} />
        )}
      </AuthModal>
    </div>
  );
};

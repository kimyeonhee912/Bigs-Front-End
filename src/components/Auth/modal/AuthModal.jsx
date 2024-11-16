import React from "react";
import "./AuthModal.css";

export const AuthModal = ({ isModalOpen, onModalClose, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-close-container">
          <button onClick={onModalClose} className="modal-close-button">
            닫기
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

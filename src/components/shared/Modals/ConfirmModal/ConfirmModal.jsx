import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({ title, message, onConfirm, onClose, isOpen }) => {
  if (isOpen)
    return (
      <div className="confirm-modal">
        <p className="confirm-modal-title">{title}</p>
        <p className="confirm-modal-message">{message}</p>
        <div className="confirm-modal-button-container">
          <input type="button" value="Confirm" onClick={onConfirm} />
          <input type="button" value="Cancel" onClick={onClose} />
        </div>
      </div>
    );
  return null;
};

export default ConfirmModal;

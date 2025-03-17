import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
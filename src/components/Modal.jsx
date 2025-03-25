import React from "react";
import "../assets/css/style.css";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} 
        style={{
        backgroundColor: "rgb(255, 255, 255)",  
        }}>
        <button className="submit"
          onClick={onClose}
          style={{ position: "absolute", top: "10px", right: "10px", display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000, }}
        >
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

   
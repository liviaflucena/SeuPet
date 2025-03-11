import React from "react";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ccc",
        padding: "10px",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <p>Entre em contato com a gente!</p>
      <div className="contact-links">
        <a href="#" className="contact-link">
          Instagram
        </a>
        <a href="#" className="contact-link">
          Email
        </a>
        <a href="#" className="contact-link">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;

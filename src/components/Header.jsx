import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#ccc", padding: "10px" }}>
      <h1>SeuPet</h1>
      <nav>
        <Link to="/listagem-tutor">Tutores</Link>
      </nav>
    </header>
  );
}

export default Header;

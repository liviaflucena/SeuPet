import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

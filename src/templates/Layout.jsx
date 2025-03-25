// Layout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../assets/css/style.css";

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Cabeçalho fixo no topo */}
      <Header />

      {/* Conteúdo principal que se expande */}
      <div style={{ flex: '1' }}>
        {children}
      </div>

      {/* Rodapé no fim da página */}
      <Footer />
    </div>
  );
}

export default Layout;

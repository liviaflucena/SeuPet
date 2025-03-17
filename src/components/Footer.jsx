import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--primary-pastel-green)',
        color: 'var(--text-on-green)',
        marginTop: '20px'
      }}
    >
      <Container className="p-4">
        <Row>
          {/* Logo e breve descrição */}
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase d-flex align-items-center">
              <img
                src="/SeuPet.svg"
                alt="SeuPet Logo"
                width="70"
                height="70"
                className="me-2"
              />
              SeuPet
            </h5>
            <p className="mt-3">
              Gerencie as informações do seu pet de forma simples e eficiente.
            </p>
          </Col>

          {/* Navegação */}
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Navegação</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/listagem-tutor" className="text-white text-decoration-none">Tutores</a></li>
              <li><a href="/listagem-animal" className="text-white text-decoration-none">Animais</a></li>
              <li><a href="/contato" className="text-white text-decoration-none">Contato</a></li>
            </ul>
          </Col>

          {/* Links úteis */}
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links Úteis</h5>
            <ul className="list-unstyled">
              <li><a href="/termos" className="text-white text-decoration-none">Termos de Uso</a></li>
              <li><a href="/privacidade" className="text-white text-decoration-none">Política de Privacidade</a></li>
              <li><a href="/ajuda" className="text-white text-decoration-none">Ajuda</a></li>
              <li><a href="/sobre" className="text-white text-decoration-none">Sobre</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2025 SeuPet. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;

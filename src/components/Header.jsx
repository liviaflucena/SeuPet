import React from 'react';
import {
  Container,
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      /* Usamos a cor pastel green como fundo */
      style={{ backgroundColor: 'var(--primary-pastel-green)' }}
      className="mb-4"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/SeuPet.svg" // Certifique-se de que o arquivo esteja na pasta public
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="SeuPet Logo"
          />
          {' '}
          SeuPet
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/listagem-tutor">Tutores</Nav.Link>
            <Nav.Link as={Link} to="/listagem-animal">Animais</Nav.Link>
            <NavDropdown title="Mais" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/sobre">
                Sobre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contato">
                Contato
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-light"
            >
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

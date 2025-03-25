import React, { useState } from 'react';
import Layout from '../templates/Layout';
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
  // Estado para controlar a exibição do modal
  const [showModal, setShowModal] = useState(false);

  // Funções para abrir/fechar o modal
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Layout>
      {/* Carrossel de Imagens */}
      <Carousel className="mb-4 carousel-container" >
        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bem-vindo ao SeuPet"
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(120, 155, 159, 0.6)',
              padding: '10px',
              borderRadius: '5px',
              bottom: '120px'
              
            }}
          >
            <h3 style={{ color: '#FFF' }}>Bem-vindo ao SeuPet</h3>
            <p style={{ color: '#FFF' }}>
              Gerencie as informações do seu pet de forma simples e prática.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.unsplash.com/photo-1606098216818-40939b7c98ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cuidado e Carinho"
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(120, 155, 159, 0.6)',
              padding: '10px',
              borderRadius: '5px',
              bottom: '120px'
            }}
          >
            <h3 style={{ color: '#FFF' }}>Cuidado e Carinho</h3>
            <p style={{ color: '#FFF' }}>
              Oferecemos os melhores serviços para o seu pet.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://images.unsplash.com/photo-1545529468-42764ef8c85f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Serviços de Excelência"
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(120, 155, 159, 0.6)',
              padding: '10px',
              borderRadius: '5px',
              bottom: '120px'
            }}
          >
            <h3 style={{ color: '#FFF' }}>Serviços de Excelência</h3>
            <p style={{ color: '#FFF' }}>
              Agende remédios, vacinas e muito mais.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Seção de Cards (Serviços) */}
      <Container>
        <h2 className="mb-4 text-center" style={{ color: '#000' }}>
          Nossos Serviços
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1575470887806-b77feadf85fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cadastro de Animais"
              />
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>Cadastro de Animais</Card.Title>
                <Card.Text>
                  Cadastre seus animais e acompanhe todas as informações.
                </Card.Text>
                <Button
                  as={Link}
                  to="/listagem-animal"
                  style={{
                    backgroundColor: '#8dadad',
                    border: 'none'
                  }}
                >
                  Ver Animais
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1579119134757-5c38803f34fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cadastro de Tutores"
              />
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>Cadastro de Tutores</Card.Title>
                <Card.Text>
                  Mantenha todos os dados dos tutores organizados e atualizados.
                </Card.Text>
                <Button
                  as={Link}
                  to="/listagem-tutor"
                  style={{
                    backgroundColor: '#8dadad',
                    border: 'none'
                  }}
                >
                  Ver Tutores
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Agendamento de Vacinas"
              />
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>Agendamento</Card.Title>
                <Card.Text>
                  Agende remédios e vacinas para garantir a saúde do seu pet.
                </Card.Text>
                <Button
                  as={Link}
                  to="/listagem-vacinas"
                  style={{
                    backgroundColor: '#8dadad',
                    border: 'none'
                  }}
                >
                  Agendar Agora
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal que aparece ao clicar em "Saiba Mais" */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Informações Adicionais</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Aqui você pode incluir mais detalhes sobre a aplicação SeuPet, explicar funcionalidades extras ou até oferecer links para páginas de cadastro e agendamento.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Home;
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
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Bem-vindo+ao+SeuPet"
            alt="Bem-vindo ao SeuPet"
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(157, 175, 159, 0.6)', // Verde pastel semitransparente
              padding: '10px',
              borderRadius: '5px'
            }}
          >
            <h3 style={{ color: '#FFF' }}>Bem-vindo ao SeuPet</h3>
            <p style={{ color: '#FFF' }}>
              Gerencie as informações do seu pet de forma simples e prática.
            </p>
            {/* Botão que abre o Modal */}
            <Button variant="light" onClick={handleOpenModal}>
              Saiba Mais
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Cuidado+e+Carinho"
            alt="Cuidado e Carinho"
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(157, 175, 159, 0.6)',
              padding: '10px',
              borderRadius: '5px'
            }}
          >
            <h3 style={{ color: '#FFF' }}>Cuidado e Carinho</h3>
            <p style={{ color: '#FFF' }}>
              Oferecemos os melhores serviços para o seu pet.
            </p>
            <Button variant="light" onClick={handleOpenModal}>
              Saiba Mais
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Servi%C3%A7os+de+Excel%C3%AAncia"
            alt="Serviços de Excelência"
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(157, 175, 159, 0.6)',
              padding: '10px',
              borderRadius: '5px'
            }}
          >
            <h3 style={{ color: '#FFF' }}>Serviços de Excelência</h3>
            <p style={{ color: '#FFF' }}>
              Agende remédios, vacinas e muito mais.
            </p>
            <Button variant="light" onClick={handleOpenModal}>
              Saiba Mais
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Seção de Cards (Serviços) */}
      <Container>
        <h2
          className="mb-4 text-center"
          style={{ color: '#000' }} // Verde pastel da logo
        >
          Nossos Serviços
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200?text=Cadastro+de+Animais"
                alt="Cadastro de Animais"
              />
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  Cadastro de Animais
                </Card.Title>
                <Card.Text>
                  Cadastre seus animais e acompanhe todas as informações
                  importantes.
                </Card.Text>
                <Button
                  as={Link}
                  to="/listagem-animal"
                  style={{
                    backgroundColor: ' #8dadad',
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
                src="https://via.placeholder.com/300x200?text=Cadastro+de+Tutores"
                alt="Cadastro de Tutores"
              />
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  Cadastro de Tutores
                </Card.Title>
                <Card.Text>
                  Mantenha todos os dados dos tutores organizados e atualizados.
                </Card.Text>
                <Button
                  as={Link}
                  to="/listagem-tutor"
                  style={{
                    backgroundColor: ' #8dadad',
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
                src="https://via.placeholder.com/300x200?text=Agendamento+de+Consulta"
                alt="Agendamento de Vacinas"
              />
              <Card.Body>
                <Card.Title style={{ color: '#000' }}>
                  Agendamento
                </Card.Title>
                <Card.Text>
                  Agende remédios e vacinas para garantir a saúde do seu pet.
                </Card.Text>
                <Button
                  as={Link}
                  to="/agendamento"
                  style={{
                    backgroundColor:' #8dadad',
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
          Aqui você pode incluir mais detalhes sobre a aplicação SeuPet, 
          explicar funcionalidades extras ou até oferecer links para 
          páginas de cadastro e agendamento.
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

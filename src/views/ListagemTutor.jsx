import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TutorCard from "../components/TutorCard";
import TutorForm from "../components/TutorForm";
import Modal from "../components/Modal";
import Layout from "../templates/Layout";

function ListagemTutor() {
  const [tutors, setTutors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tutores")
      .then((response) => {
        setTutors(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar tutores:", error);
      });
  }, []);

  const addTutor = (newTutor) => {
    setTutors([...tutors, newTutor]);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div>
        <h2>Tutores Cadastrados</h2>
        <div>
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
        <button onClick={() => setIsModalOpen(true)}>Cadastro de Tutor</button>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Cadastro de Tutor</h2>
          <TutorForm addTutor={addTutor} />
        </Modal>
      </div>
    </Layout>
  );
}

export default ListagemTutor;

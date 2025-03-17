// ListagemTutor.jsx
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
        <h2 className="mb-4">Tutores Cadastrados</h2>
        <div className="row">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="col-md-4">
              <TutorCard tutor={tutor} />
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setIsModalOpen(true)}
        >
          Cadastro de Tutor
        </button>
        <Link to="/">
          <button className="btn btn-secondary mt-3 ms-2">Home</button>
        </Link>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="mb-3">Cadastro de Tutor</h2>
          <TutorForm addTutor={addTutor} />
        </Modal>
      </div>
    </Layout>
  );
}

export default ListagemTutor;

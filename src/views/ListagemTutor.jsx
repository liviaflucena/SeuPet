// ListagemTutor.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TutorCard from "../components/TutorCard";
import TutorForm from "../components/TutorForm";
import Modal from "../components/Modal";
import Layout from "../templates/Layout";
import TutorEditForm from "../components/TutorEditForm";

function ListagemTutor() {
  const [tutors, setTutors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTutor, setEditTutor] = useState(null);

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

  const updateTutor = async (updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tutores/${editTutor.id}`,
        updatedData
      );
      const updatedTutor = response.data;
      setTutors(
        tutors.map((t) => (t.id === updatedTutor.id ? updatedTutor : t))
      );
      setEditTutor(null);
    } catch (error) {
      console.error("Erro ao atualizar tutor:", error);
    }
  };

  const deleteTutor = async (tutorId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tutores/${tutorId}`);
      setTutors(tutors.filter((t) => t.id !== tutorId));
    } catch (error) {
      console.error("Erro ao excluir tutor:", error);
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Tutores Cadastrados</h2>
        <div className="row">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="col-md-4">
              <TutorCard
              tutor={tutor}
              onEdit={(t) => setEditTutor(t)}
              onDelete={deleteTutor}
            />
            </div>
          ))}
        </div>
        <button
          className="btn btn-secondary mt-3 ms-2"
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

        <Modal isOpen={!!editTutor} onClose={() => setEditTutor(null)}>
          <h2 className="mb-3">Edição de Tutor</h2>
          {editTutor && (
            <TutorEditForm
              tutor={editTutor}
              onConfirm={updateTutor}
              onCancel={() => setEditTutor(null)}
            />
          )}
        </Modal>
      </div>
    </Layout>
  );
}

export default ListagemTutor;

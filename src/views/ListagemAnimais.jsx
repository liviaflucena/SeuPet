// ListagemAnimais.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AnimalCard from "../components/AnimalCard";
import AnimalForm from "../components/AnimalForm";
import Modal from "../components/Modal";
import Layout from "../templates/Layout";

function ListagemAnimais() {
  const [animals, setAnimals] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/animais")
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => console.error("Erro ao buscar animais:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tutores")
      .then((response) => {
        setTutors(response.data);
      })
      .catch((error) => console.error("Erro ao buscar tutores:", error));
  }, []);

  const addAnimal = (newAnimal) => {
    setAnimals([...animals, newAnimal]);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Animais Cadastrados</h2>
        <div className="row">
          {animals.map((animal) => (
            <div key={animal.id} className="col-md-4">
              <AnimalCard animal={animal} />
            </div>
          ))}
        </div>
        <button
          className="btn btn-secondary mt-3 ms-2" 
          onClick={() => setIsModalOpen(true)} 
        >
          Cadastro de Animal
        </button>
        <Link to="/">
          <button className="btn btn-secondary mt-3 ms-2">Home</button>
        </Link>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="mb-3">Cadastro de Animal</h2>
          <AnimalForm addAnimal={addAnimal} tutors={tutors} />
        </Modal>
      </div>
    </Layout>
  );
}

export default ListagemAnimais;

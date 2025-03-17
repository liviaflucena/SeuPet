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
        <h2>Animais cadastrados</h2>
        <div>
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <button onClick={() => setIsModalOpen(true)}>Cadastro de Animal</button>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Cadastro de Animal</h2>
          <AnimalForm addAnimal={addAnimal} tutors={tutors} />
        </Modal>
      </div>
    </Layout>
  );
}

export default ListagemAnimais;

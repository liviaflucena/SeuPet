import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VacinaCard from "../components/VacinaCard";
import VacinaForm from "../components/VacinaForm";
import Modal from "../components/Modal";
import Layout from "../templates/Layout";

function ListagemVacinas() {
  const [vacinas, setVacina] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vacinas")
      .then((response) => {
        setVacina(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar vacinas:", error);
      });
  }, []);

  const addVacina = (newVacina) => {
    setVacina([...vacinas, newVacina]);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Vacinas Cadastradas</h2>
        <div className="row">
          {vacinas.map((vacina) => (
            <div key={vacina.id} className="col-md-4">
              <VacinaCard vacina={vacina} />
            </div>
          ))}
        </div>
        <button
          className="btn btn-secondary mt-3 ms-2"
          onClick={() => setIsModalOpen(true)}
        >
          Cadastro de Vacina
        </button>
        <Link to="/">
          <button className="btn btn-secondary mt-3 ms-2">Home</button>
        </Link>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="mb-3">Cadastro de Vacina</h2>
          <VacinaForm addVacina={addVacina} />
        </Modal>
      </div>
    </Layout>
  );
}

export default ListagemVacinas;

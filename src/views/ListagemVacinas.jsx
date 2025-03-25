import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VacinaCard from "../components/VacinaCard";
import VacinaForm from "../components/VacinaForm";
import VacinaEditForm from "../components/VacinaEditForm";
import Modal from "../components/Modal";
import Layout from "../templates/Layout";

function ListagemVacinas() {
  const [vacinas, setVacina] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedVacina, setSelectedVacina] = useState(null);

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

  const handleDeleteVacina = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/vacinas/${id}`);
      setVacina(vacinas.filter(vacina => vacina.id !== id));
    } catch (error) {
      console.error("Erro ao excluir vacina:", error);
    }
  };

  const handleEditVacina = (vacina) => {
    setSelectedVacina(vacina);
    setIsEditModalOpen(true);
  };

  const handleUpdateVacina = async (formData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/vacinas/${selectedVacina.id}`,
        formData
      );
      setVacina(vacinas.map(v => 
        v.id === selectedVacina.id ? response.data : v
      ));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar vacina:", error);
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Vacinas Cadastradas</h2>
        <div className="row">
          {vacinas.map((vacina) => (
            <div key={vacina.id} className="col-md-4">
              <VacinaCard vacina={vacina} onEdit={handleEditVacina} onDelete={handleDeleteVacina}/>
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

        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
          <h2 className="mb-3">Editar Vacina</h2>
          {selectedVacina && (
            <VacinaEditForm 
              vacina={selectedVacina}
              onConfirm={handleUpdateVacina}
              onCancel={() => setIsEditModalOpen(false)}
            />
          )}
        </Modal>
        
      </div>
    </Layout>
  );
}

export default ListagemVacinas;

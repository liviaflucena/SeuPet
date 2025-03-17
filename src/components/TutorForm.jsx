// TutorForm.jsx
import React, { useState } from "react";
import axios from "axios";

function TutorForm({ addTutor }) {
  const [formData, setFormData] = useState({
    nome: "",
    documento: "",
    email: "",
    endereco: {
      estado: "",
      cep: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      complemento: "",
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tutores",
        formData
      );
      addTutor(response.data);
      setFormData({
        nome: "",
        documento: "",
        email: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        pais: "",
        cep: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar tutor:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="documento" className="form-label">
          Documento:
        </label>
        <input
          type="text"
          id="documento"
          name="documento"
          value={formData.documento}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar Tutor
      </button>
    </form>
  );
}

export default TutorForm;

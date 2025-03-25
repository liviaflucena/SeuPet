import React, { useState } from "react";
import axios from "axios";


function VacinaForm({ addVacina }) {
  const [formData, setFormData] = useState({
    nome_vacina: "",
    fabricante: "",
    data_validade: "",
    lote: ""
     
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.nome_vacina]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/vacinas",
        formData
      );
      addVacina(response.data);
      setFormData({
        nome_vacina: "",
    fabricante: "",
    data_validade: "",
    lote: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar vacina:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome da Vacina:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome_vacina}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="fabricante">Fabricante:</label>
        <input
          type="text"
          id="fabricante"
          name="fabricante"
          value={formData.fabricante}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="data">Data de Validade:</label>
        <input
          type="date"
          id="data"
          name="data"
          value={formData.data_validade}
          onChange={handleChange}
        />
      </div>
      <fieldset>
        <div>
          <label htmlFor="lote">Lote:</label>
          <input
            type="text"
            id="lote"
            name="lote"
            value={formData.lote}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <button type="submit">Adicionar Vacina</button>
    </form>
  );
}

export default VacinaForm;

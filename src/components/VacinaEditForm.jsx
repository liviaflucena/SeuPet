import React, { useState, useEffect } from "react";
import "../assets/css/style.css";

function VacinaEditForm({ vacina, onConfirm, onCancel }) {
  const [formData, setFormData] = useState({
    nome_vacina: "",
    fabricante: "",
    data_validade: "",
    lote: "",
  });

  useEffect(() => {
    setFormData({
      nome_vacina: vacina.nome_vacina || "",
      fabricante: vacina.fabricante || "",
      data_validade: vacina.data_validade || "",
      lote: vacina.lote || "",
    });
  }, [vacina]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome_vacina">Nome da Vacina:</label>
        <input
          type="text"
          id="nome_vacina"
          name="nome_vacina"
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
        <label htmlFor="data_validade">Data de Validade:</label>
        <input
          type="date"
          id="data_validade"
          name="data_validade"
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
      <button type="submit">Confirmar Edição</button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}

export default VacinaEditForm;

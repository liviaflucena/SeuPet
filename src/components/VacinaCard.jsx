import React from "react";
import "../assets/css/style.css";

function VacinaCard({ vacina, onEdit, onDelete }) {
  return (
    <div className="vacina-card">
      <h3>{vacina.nome_vacina}</h3>
      <p>
        <strong>Fabricante:</strong> {vacina.fabricante}
      </p>
      <p>
        <strong>Data de Validade:</strong> {vacina.data_validade}
      </p>
      <strong>Lote:</strong> {vacina.lote}
      <button onClick={() => onEdit(vacina)}>Editar</button>
      <button onClick={() => onDelete(vacina.id)}>Excluir</button>
    </div>
  );
}

export default VacinaCard;

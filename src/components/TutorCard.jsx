function TutorCard({ tutor }) {
  return (
    <div className="tutor-card">
      <h3>{tutor.name}</h3>
      <p>
        <strong>CPF:</strong> {tutor.cpf}
      </p>
      <p>
        <strong>Email:</strong> {tutor.email}
      </p>
      {/* <p>
        <strong>Endereço:</strong> {tutor.address.street},{" "}
        {tutor.address.number}
        {tutor.address.complement && `, ${tutor.address.complement}`},{" "}
        {tutor.address.neighborhood}, {tutor.address.city} -{" "}
        {tutor.address.state}, CEP: {tutor.address.cep}
      </p> */}
    </div>
  );
}

export default TutorCard;

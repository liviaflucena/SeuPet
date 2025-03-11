// src/mocks/axiosMock.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Cria uma instância do mock adapter
const mock = new MockAdapter(axios);

// Configura o mock para interceptar a requisição POST para cadastro de tutor
mock.onPost("http://localhost:5000/api/tutors").reply((config) => {
  const data = JSON.parse(config.data);
  return [201, { id: Date.now(), ...data }];
});

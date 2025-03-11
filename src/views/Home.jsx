import React from "react";
import { Link } from "react-router-dom";
import Layout from "../templates/Layout";

function Home() {
  return (
    <Layout>
      <div>
        <h2>Boas vindas ao SeuPet!</h2>
        <p>
          Aqui você poderá registrar os dados médicos do seu pet e ter o cartão
          de vacinação dele sempre em mãos.
        </p>
      </div>
    </Layout>
  );
}

export default Home;

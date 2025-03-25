import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ListagemTutor from "./views/ListagemTutor";
import ListagemAnimais from "./views/ListagemAnimais";
import ListagemVacinas from "./views/ListagemVacinas";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem-tutor" element={<ListagemTutor />} />
        <Route path="/listagem-animal" element={<ListagemAnimais />} />
        <Route path="/listagem-vacina" element={<ListagemVacinas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

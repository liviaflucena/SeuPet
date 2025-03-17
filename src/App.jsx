import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ListagemTutor from "./views/ListagemTutor";
import ListagemAnimais from "./views/ListagemAnimais";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem-tutor" element={<ListagemTutor />} />
        <Route path="/listagem-animal" element={<ListagemAnimais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

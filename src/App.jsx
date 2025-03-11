import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ListagemTutor from "./views/ListagemTutor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem-tutor" element={<ListagemTutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

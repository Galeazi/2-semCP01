import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Entradinhas from "./pages/Entradinhas/Entradinhas";
import Bebidas from "./pages/Bebidas/Bebidas"
import Sobremesas from "./pages/Sobremesas/Sobremesas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/entradas" element={<Entradinhas />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/sobremesas" element={<Sobremesas />} />
      </Routes>
    </BrowserRouter>
  );
}

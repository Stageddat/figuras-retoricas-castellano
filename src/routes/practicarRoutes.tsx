import { Route, Routes } from "react-router-dom";
import PracticarMainMenuContent from "../components/practicarMainMenuContent";
import EjemploQuiz from "../practicar/ejemploQuiz";
import DefinicionQuiz from "../practicar/definicionQuiz";
import FiguraQuiz from "../practicar/figuraQuiz";
function PracticarMainMenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PracticarMainMenuContent />} />
            <Route path="/mixto" element={<>mixto xd</>} />
            <Route path="/nombre" element={<FiguraQuiz />} />
            <Route path="/significado" element={<DefinicionQuiz />} />
            <Route path="/ejemplo" element={<EjemploQuiz />} />
        </Routes>
    );
}

export default PracticarMainMenuRoutes;
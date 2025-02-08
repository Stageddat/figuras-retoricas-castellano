import { Route, Routes } from "react-router-dom";
import PracticarMainMenuContent from "../components/practicarMainMenuContent";
import EjemploQuiz from "../practicar/ejemploQuiz";
import DefinicionQuiz from "../practicar/definicionQuiz";
function PracticarMainMenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PracticarMainMenuContent />} />
            <Route path="/mixto" element={<>mixto xd</>} />
            <Route path="/nombre" element={<>nombre xd</>} />
            <Route path="/significado" element={<DefinicionQuiz />} />
            <Route path="/ejemplo" element={<EjemploQuiz />} />
        </Routes>
    );
}

export default PracticarMainMenuRoutes;
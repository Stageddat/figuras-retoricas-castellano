import { Routes, Route } from 'react-router-dom';
import EstudiarContent from '../components/estudiarContent';
import '../style.css';
import MainContent from '../components/mainContent';
import PracticarMainMenuContent from '../components/practicarMainMenuContent';

function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/estudiar" element={<EstudiarContent />} />
            <Route path="/practicar/*" element={<PracticarMainMenuContent />} />
        </Routes>
    );
}

export default MainRoute;

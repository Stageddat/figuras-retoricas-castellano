import { Routes, Route } from 'react-router-dom';
import EstudiarContent from '../components/estudiarContent';
import MainContent from '../components/mainContent';
import PracticarMainMenuRoutes from './practicarRoutes';

function MainRoute() {
    return (
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/estudiar" element={<EstudiarContent />} />
                <Route path="/practicar/*" element={<PracticarMainMenuRoutes />} />
            </Routes>
    );
}

export default MainRoute;
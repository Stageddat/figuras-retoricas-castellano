import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';
import MainRoute from './routes/mainRoute';

const base = process.env.NODE_ENV === 'production' ? '/recursos-expresivos-castellano' : '';

function App() {
    return (
        <Router basename={base}>
            <div>
                <h1 className="title">FIGURAS RETÓRICAS</h1>
                <MainRoute />
            </div>
        </Router>
    );
}

export default App;

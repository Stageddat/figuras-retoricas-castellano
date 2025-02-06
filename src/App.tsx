import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './routes/mainRoute';

const base = process.env.NODE_ENV === 'production' ? '/recursos-expresivos-castellano' : '';

function App() {
    return (
        <Router basename={base}>
            <div className="bg-gray-900 min-h-screen">
                <main>
                    <MainRoute />
                </main>
            </div>
        </Router>
    );
}

export default App;
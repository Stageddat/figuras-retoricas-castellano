import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './routes/mainRoute';

function App() {
    return (
        <Router>
            <div className="bg-gray-900 min-h-screen">
                <main>
                    <MainRoute />
                </main>
            </div>
        </Router>
    );
}

export default App;
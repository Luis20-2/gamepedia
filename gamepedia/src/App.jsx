import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import GameDetails from './pages/GameDetails';

function App() {
    return (
        <div className="app-shell">
            <div className="bg-orb bg-orb-left" aria-hidden="true" />
            <div className="bg-orb bg-orb-right" aria-hidden="true" />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<GameDetails />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    );
}

export default App;
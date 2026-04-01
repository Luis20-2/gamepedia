import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand-block">
                <Link to="/" className="nav-logo">
                    GAMEPEDIA
                </Link>
                <p className="brand-subtitle">Arcade Atlas</p>
            </div>

            <div className="nav-links">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/favorites" className="nav-link">Mis Favoritos</Link>
                <span className="edition-pill">2026</span>
            </div>
        </nav>
    );
};

export default Navbar;
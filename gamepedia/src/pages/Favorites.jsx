import { useState } from 'react';
import { Link } from 'react-router-dom';

const getFavorites = () => {
    try { return JSON.parse(localStorage.getItem('favorites')) || []; }
    catch { return []; }
};

const Favorites = () => {
    const [favorites, setFavorites] = useState(getFavorites);

    const removeFavorite = (id) => {
        const updated = favorites.filter(f => f.id !== id);
        localStorage.setItem('favorites', JSON.stringify(updated));
        setFavorites(updated);
    };

    return (
        <div className="container">
            <h2 className="title">Mis Juegos Favoritos ❤️</h2>
            {favorites.length === 0 ? (
                <p className="state-message">Aún no has agregado ningún juego a tu lista.</p>
            ) : (
                <div className="games-grid">
                    {favorites.map((game) => (
                        <div key={game.id} className="game-card">
                            {game.background_image && (
                                <img src={game.background_image} alt={game.name} className="game-image" />
                            )}
                            <Link to={`/game/${game.id}`} className="game-info fav-link">
                                <h3 className="game-title">{game.name}</h3>
                                <p className="game-rating">⭐ Calificación: {game.rating}</p>
                            </Link>
                            <div className="game-actions">
                                <button className="add-button remove-button" onClick={() => removeFavorite(game.id)}>
                                    ❌ Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
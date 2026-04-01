import { Link } from 'react-router-dom';
import { useState } from 'react';

const getFavorites = () => {
    try { return JSON.parse(localStorage.getItem('favorites')) || []; }
    catch { return []; }
};

const GameCard = ({ game }) => {
    const [favorite, setFavorite] = useState(() =>
        getFavorites().some(f => f.id === game.id)
    );

    const handleFavorite = (e) => {
        e.preventDefault();
        const favorites = getFavorites();
        if (favorite) {
            localStorage.setItem('favorites', JSON.stringify(favorites.filter(f => f.id !== game.id)));
            setFavorite(false);
        } else {
            localStorage.setItem('favorites', JSON.stringify([...favorites, game]));
            setFavorite(true);
        }
    };

    return (
        <Link to={`/game/${game.id}`} className="game-card">
            {game.background_image && (
                <img
                    src={game.background_image}
                    alt={game.name}
                    className="game-image"
                />
            )}
            <div className="game-info">
                <h3 className="game-title">{game.name}</h3>
                <p className="game-rating">⭐ Calificación: {game.rating}</p>
            </div>
            <div className="game-actions">
                <button className="add-button" onClick={handleFavorite}>
                    {favorite ? '❤️ Guardado' : '+ Favoritos'}
                </button>
            </div>
        </Link>
    );
};

export default GameCard;
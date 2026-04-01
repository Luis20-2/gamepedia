import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = 'e67e9ea1f7614d85af2543505413d25c';
        const fetchGame = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
                if (!response.ok) throw new Error('No se pudo cargar el juego');
                const data = await response.json();
                setGame(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGame();
    }, [id]);

    if (isLoading) return <h2 className="state-message">Cargando detalles... ⏳</h2>;
    if (error) return <h2 className="state-message error-text">Error: {error} ❌</h2>;

    return (
        <div className="container">
            <Link to="/" className="back-link">← Volver</Link>
            <div className="game-detail">
                {game.background_image && (
                    <img src={game.background_image} alt={game.name} className="detail-image" />
                )}
                <h2 className="title">{game.name}</h2>
                <p className="game-rating">⭐ Calificación: {game.rating} / 5</p>
                {game.description_raw && (
                    <p className="detail-description">
                        {game.description_raw.length > 500
                            ? game.description_raw.slice(0, 500) + '...'
                            : game.description_raw}
                    </p>
                )}
                <p><strong>Géneros:</strong> {game.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
                <p><strong>Plataformas:</strong> {game.platforms?.map(p => p.platform.name).join(', ') || 'N/A'}</p>
                <p><strong>Fecha de lanzamiento:</strong> {game.released || 'N/A'}</p>
            </div>
        </div>
    );
};

export default GameDetails;
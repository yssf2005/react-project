import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../assets/components/movieCard';
import '../css/Favorites.css';

function Favorites() {
    const { favorites } = useMovieContext();
    
    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                 <h3>No favorite movies added yet</h3>
                <p>Start adding movies to your favorites and they will appear here</p>
            </div>
        );
    }

    return (
        <div className="favorites-container">
            <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
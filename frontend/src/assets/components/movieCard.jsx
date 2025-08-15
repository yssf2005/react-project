import React from 'react';
import "../../css/MovieCard.css"
import { useMovieContext } from '../../context/MovieContext';

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function Onfav(e){
        e.preventDefault()
        if(favorite)removeFromFavorites(movie.id)
            else addToFavorites(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img 
                    src={movie.poster_path 
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/300x450?text=No+Poster'}
                    alt={movie.title}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
                    }}
                />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={Onfav}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard;

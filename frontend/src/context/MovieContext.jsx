import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs){
            setFavorites(JSON.parse(storedFavs))
        }
    },  [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        console.log('Adding to favorites:', movie);
        setFavorites((prev) => {
            const newFavorites = [...prev, movie];
            console.log('New favorites:', newFavorites);
            return newFavorites;
        });
    }

    const removeFromFavorites = (movieID) => {
        console.log('Removing from favorites:', movieID);
        setFavorites((prev) => {
            const newFavorites = prev.filter(movie => movie.id !== movieID);
            console.log('Updated favorites after removal:', newFavorites);
            return newFavorites;
        });
    }

    const isFavorite = (movieID) => {
        const isFav = favorites.some(movie => movieID === movie.id);
        console.log(`Is movie ${movieID} favorite?`, isFav);
        return isFav;
    }
    
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
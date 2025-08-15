import MovieCard from "../assets/components/movieCard"
import {useState, useEffect} from "react"
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [filterdMovies, setFiletredMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                setFiletredMovies(popularMovies) 
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])



    useEffect(() =>{
        if(searchQuery.trim() === ""){
            setFiletredMovies(movies);
        }else{
            const firstLetter = searchQuery.trim().toLowerCase().charAt(0);
            const filtered = movies.filter(movie =>
                movie.title.toLowerCase().startsWith(firstLetter)
            );
            setFiletredMovies(filtered);
        }
    }, [searchQuery]);
    const handleSearch = async (e) =>{
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies...")
        }finally{
            setLoading(false)
        }
    }
    
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                 type="text"
                 placeholder="search for movies ... " 
                 className="search-input"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">search</button>
            </form>

            {error && <div className="eror-message">{error}</div>}

            {loading ? <div className="Loading">
                <p>Loading...</p>
            </div> : <div className="movie-grid">
                {
                    filterdMovies.length > 0 ? (
                        filterdMovies.map(movie => (
                            <MovieCard movie = {movie} key={movie.id}/>
                        ))
                    ) : (
                        <p className="no-results">No movies found starts with '{searchQuery.charAt(0)}'</p>
                    )
                }

            </div>     
            }

        </div>
    )

}

export default Home
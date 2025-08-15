const API_KEY = "80e9cb54c284d637151df9b1d0a579bc"
const BASE_URL = "https://api.themoviedb.org/3"  // Updated to use the correct API base URL

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
};
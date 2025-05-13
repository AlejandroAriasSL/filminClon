import { account_id, language } from "./utils/config";

export const getGenres = async () => {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}&api_key=${account_id}`)
        .then((res) => res.json())
        .catch((err) => console.error(err))
} 

export const getMoviesByGenre = async (genreId) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=${language}&api_key=${account_id}`)
        .then((res) => res.json())
        .then((data) => ({
            genreId,
            movies: data.results
        }))
        .catch((err) => console.error(`Error al obtener el género ${genreId}: ${err}`))
}
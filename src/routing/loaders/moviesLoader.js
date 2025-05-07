import { getGenres, getMoviesByGenre } from "../../services/fetchData";
export const moviesLoader = async () => {
  try {
    const fetchedGenres = await getGenres();

    const moviesPromise = Promise.all(
      fetchedGenres.genres.map((genre) => getMoviesByGenre(genre.id))
    ).then((results) =>
      results.map((movies) => ({
        genreId: movies.genreId,
        movies: movies.movies,
      }))
    );

    return { genres: fetchedGenres.genres, movies: moviesPromise };
  } catch (err) {
    console.error(err);
    return { movies: [], genres: [] };
  }
};

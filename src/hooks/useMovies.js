import { useState, useEffect } from "react";
import { getGenres, getMoviesByGenre } from "../services/fetchData";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await getGenres()
        .then((fetchedGenres) => {
          setGenres(fetchedGenres.genres);
          console.log(fetchedGenres);
          const genreRequests = fetchedGenres.genres.map((genre) =>
            getMoviesByGenre(genre.id)
          );

          Promise.all(genreRequests).then((results) => {
            console.log(results);
            const moviesByGenre = results.map((movies) => ({
              genreId: movies.genreId,
              movies: movies.movies,
            }));
            setMovies(moviesByGenre);
            console.log(movies);
          });
        })
        .catch((err) => console.error(err));
    };
    loadData();
  }, []);

  return { movies, genres };
};

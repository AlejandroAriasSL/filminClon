import { Suspense } from "react";
import { CategoryCarousel } from "../../components/Categories/Categories";
import { Await, useLoaderData } from "react-router-dom";
import { SkeletonCategory } from "../../components/Skeletons/SkeletonCategories";
import "./HomePage.css";
import { Box } from "@mui/material";

export const HomePage = () => {
  const { movies, genres } = useLoaderData();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
    <Suspense
      fallback={
        <>
          {genres.map((genre) => {
            return <SkeletonCategory key={genre.id} />;
          })}
        </>
      }
    >
      <Await resolve={movies}>
        {(resolvedMovies) => (
          <>
            {genres.map((genre) => {
              const genreMovies =
                resolvedMovies.find((item) => item.genreId === genre.id)
                  ?.movies || [];
              return (
                <CategoryCarousel
                  key={genre.id}
                  genre={genre.name}
                  movies={genreMovies}
                />
              );
            })}
          </>
        )}
      </Await>
    </Suspense>
    </Box>
  );
};

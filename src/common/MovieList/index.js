import { AddToFavourites } from "../AddToFavourites.js";
import { MoviesContainer } from "./styled";

export const MovieList = ({ movies }) => {
  const favourites = movies.addFavourites;
  return (
    <MoviesContainer>
      {movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie poster" />
          <AddToFavourites />
        </div>
      ))}
    </MoviesContainer>
  );
};

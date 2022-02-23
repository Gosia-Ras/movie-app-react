import { MoviesContainer } from "./styled";

export const MovieList = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie poster" />
          <h2>{movie.Title}</h2>
        </div>
      ))}
    </MoviesContainer>
  );
};

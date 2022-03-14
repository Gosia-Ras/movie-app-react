import {
  ImageContainer,
  Poster,
  Overlay,
  MoviesContainer,
  SearchIcon,
} from "./styled";
import { nanoid } from "nanoid";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer id="browser">
      {props.movies.map((movie) => {
        return (
          <ImageContainer
            key={nanoid()}
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <Poster src={movie.Poster} alt="movie" />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <Overlay>
              <FavouriteComponent />
            </Overlay>
          </ImageContainer>
        );
      })}
      <SearchIcon />
    </MoviesContainer>
  );
};

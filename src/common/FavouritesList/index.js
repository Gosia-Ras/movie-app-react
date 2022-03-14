import {
  ImageContainer,
  Poster,
  Overlay,
  MoviesContainer,
} from "../MovieList/styled";
import { nanoid } from "nanoid";

export const FavouritesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer id="watch">
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
    </MoviesContainer>
  );
};

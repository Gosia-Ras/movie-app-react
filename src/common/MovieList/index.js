import {MoviesContainer, ImageContainer, Poster, Overlay} from "./styled"
import { nanoid } from "nanoid";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer>
      {props.movies.map((movie) => (
        <ImageContainer key={nanoid()} onClick={() => props.handleFavouritesClick(movie)}>
          <Poster src={movie.Poster} alt="movie" />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <Overlay>
            <FavouriteComponent />
          </Overlay>
        </ImageContainer>
      ))}
    </MoviesContainer>
  );
};

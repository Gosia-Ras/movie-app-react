import {
  MoviesContainer,
  ImageContainer,
  Overlay,
  FavIcon,
  Poster,
} from "./styled";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer>
      {props.movies.map((movie, index) => (
        <ImageContainer>
          <Poster src={movie.Poster} alt="movie" />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <FavIcon />
          <Overlay onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </Overlay>
        </ImageContainer>
      ))}
    </MoviesContainer>
  );
};

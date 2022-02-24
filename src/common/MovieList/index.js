import { MoviesContainer, ImageContainer, Overlay, Poster } from "./styled";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer>
      {props.movies.map((movie, index) => (
        <ImageContainer onClick={() => props.handleFavouritesClick(movie)}>
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

import { MoviesContainer, ImageContainer, Overlay } from "./styled";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer>
      {props.movies.map((movie, index) => (
        <ImageContainer className="image-container">
          <img src={movie.Poster} alt="movie"></img>
          <Overlay onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </Overlay>
        </ImageContainer>
      ))}
    </MoviesContainer>
  );
};

import { MoviesContainer, ImageContainer } from "./styled";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer>
      {props.movies.map((movie, index) => (
        <ImageContainer className="image-container">
          <img src={movie.Poster} alt="movie"></img>
          <div
            className="overlay"
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </ImageContainer>
      ))}
    </MoviesContainer>
  );
};

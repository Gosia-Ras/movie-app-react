import { useState, useEffect } from "react";
import { MovieList } from "./common/MovieList";
import { MovieListHeading } from "./common/MovieListHeading";
import { SearchBox } from "./common/SearchBox";
import { AddFavourites } from "./common/AddToFavourites";
import { RemoveFavourites } from "./common/RemoveFromFavourites";
import { PageHeader } from "./common/PageHeader";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const fetchMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3e1c3e7a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  return (
    <div>
      <PageHeader />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        <MovieListHeading heading="Movies Browser" id="browser" />
      </div>
      <div>
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div>
        <MovieListHeading id="watch" />
      </div>
      <div>
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

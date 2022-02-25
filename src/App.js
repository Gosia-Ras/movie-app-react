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
    const key = "3e1c3e7a";
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${key}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList)
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourites(movieFavourites);
  }, []);

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

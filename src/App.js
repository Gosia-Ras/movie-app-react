import { useState, useEffect } from "react";
import { AddToFavourites } from "./common/AddToFavourites.js";
import { MovieList } from "./common/MovieList";
import { MovieListHeading } from "./common/MovieListHeading";
import { SearchBox } from "./common/SearchBox";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([])

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
    setFavourites(newFavouriteList)
  }

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <MovieListHeading heading="Movies Browser" />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} addFavourites={AddToFavourites} handleFavouritesClick={addFavouriteMovie} />
    </>
  );
};

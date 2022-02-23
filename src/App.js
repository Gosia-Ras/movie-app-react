import { useState, useEffect } from "react";
import { MovieList } from "./common/MovieList";
import { MovieListHeading } from "./common/MovieListHeading";
import { SearchBox } from "./common/SearchBox";
import { AddFavourites } from "./common/AddToFavourites";


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

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div>
        <MovieListHeading heading="Movies Browser" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div>
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div>
        <MovieListHeading heading="Favourites" />
      </div>
      <div>
        <MovieList movies={favourites} favouriteComponent={AddFavourites} />
      </div>
    </div>
  );
};

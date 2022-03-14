import { useState, useEffect } from "react";
import { MovieList } from "./common/MovieList";
import { MovieListHeading } from "./common/MovieListHeading";
import { SearchBox } from "./common/SearchBox";
import { AddFavourites } from "./common/AddToFavourites";
import { RemoveFavourites } from "./common/RemoveFromFavourites";
import { PageHeader } from "./common/PageHeader";
import { Footer } from "./common/Footer";
import { FavouritesList } from "./common/FavouritesList";
import { Wrapper } from "./common/Wrapper";

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
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies(searchValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
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
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Wrapper>
      <PageHeader id="top" />
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
        <MovieListHeading />
      </div>
      <FavouritesList
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        favouriteComponent={RemoveFavourites}
      />
      <Footer />
    </Wrapper>
  );
};

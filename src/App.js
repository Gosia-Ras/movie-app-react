import { useState, useEffect } from "react";
import {MovieList} from "./common/MovieList";

export const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=263d22d8";
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

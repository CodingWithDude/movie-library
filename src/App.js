import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import SearchForm from "./Components/SearchForm";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8b78faef`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setSearchSubmitted(false);
    }
  };

  useEffect(() => {
    if (searchSubmitted) {
      getMovieRequest(searchValue);
    }
  }, [searchSubmitted]);

  return (
    <div className="app-container">
      <div className="navbar">
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchSubmitted={searchSubmitted}
          setSearchSubmitted={setSearchSubmitted}
        />
      </div>

      <Sidebar />
      <div className="main-content">
        <MovieListHeading heading="Movies" />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;

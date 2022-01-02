import React, { useState, useEffect, useRef } from "react";
import Movie from "./Movie";

const Main = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const input = useRef("");

  const findMovie = (e) => {
    e.preventDefault();
    setMovie(search);
    setSearch("");
    input.current.focus();
  };

  useEffect(async () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ba756d7e5982e43152576edf2743cb99&query=${movie}`
    )
      .then((res) => res.json())
      .then((data) => !data.errors && setMovies(data.results));
    console.log(movies);
  }, [movie]);

  return (
    <main>
      <form onSubmit={findMovie}>
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={input}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {movies
        .filter((movie) => movie.backdrop_path)
        .map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
    </main>
  );
};

export default Main;

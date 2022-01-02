import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="movie poster"
        className="movie-image"
      />
      <div className="movie-info">
        <div className="movie-info-main">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-desc">{movie.overview}</p>
        </div>
        <div className="movie-info-extra">
          <p className="vote">
            Average Vote: <span>{movie.vote_average}</span>
          </p>
          <p className="vote-count">
            Vote Count: <span>{movie.vote_count}</span>
          </p>
          <p className="release-date">
            Release Date: <span>{movie.release_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

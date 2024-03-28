import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";

export default function Watched() {
  const { watched, clearWatched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <button
            className="button"
            onClick={() => {
              clearWatched();
              window.location.reload();
            }}
          >
            Clear All
          </button>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h3 className="no-movies">Your Watched list is empty!</h3>
        )}
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";

export default function Watchlist() {
  const { watchlist, clearWatchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <button
            className="button"
            onClick={() => {
              clearWatchlist();
              window.location.reload();
            }}
          >
            Clear All
          </button>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h3 className="no-movies">Your Watchlist is empty!</h3>
        )}
      </div>
    </div>
  );
}

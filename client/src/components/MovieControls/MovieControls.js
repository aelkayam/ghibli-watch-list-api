import "./MovieControls.css";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-button"
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-button"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-button"
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-button"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

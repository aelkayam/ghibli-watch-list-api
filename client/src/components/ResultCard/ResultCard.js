import "./ResultCard.css";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export default function ResultCard({ movie }) {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched
  } = useContext(GlobalContext);

  // check if the movie already in a list:
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);

  // show/hide buttons
  const watchlistDisabled = storedMovie ? true : watchedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <Link className="link-movie-page" to={`/moviePage/${movie.id}`}>
          <img src={movie.image} alt={`${movie.title} Poster`} />
          {/* <span className="link-movie-page"></span> */}
        </Link>
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date : "-"}
          </h4>
          <h4 className="reviews">
            {"Score: " + movie.rt_score + "%"}
            {" --- " + movie.running_time + " min"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="button"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>

          <button
            className="button"
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}

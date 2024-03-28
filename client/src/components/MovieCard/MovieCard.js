import "./MovieCard.css";
import React from "react";
import MovieControls from "../MovieControls/MovieControls";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card" key={movie.key}>
      <div className="overlay">
        <Link to={`/moviePage/${movie.id}`}>
          <span className="movie-link"></span>
        </Link>
      </div>

      {<img src={movie.image} alt={`${movie.title} Poster`} />}

      <div className="info">
        <h3 className="title">{movie.title}</h3>

        {/* <div className="description">{movie.description}</div> */}
      </div>

      <MovieControls movie={movie} type={type} />
    </div>
  );
}

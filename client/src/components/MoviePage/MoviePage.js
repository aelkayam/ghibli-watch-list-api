import "./MoviePage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage(movie) {
  const { id } = useParams();
  const [featuredMovie, setfeaturedMovie] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films").then((res) => {
      res.json().then((data) => {
        if (!data.errors) {
          setfeaturedMovie(data.find((movie) => String(movie.id) === id));
        } else {
          setfeaturedMovie([]);
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="film-page">
      <div className="container">
        <div className="header">
          <img
            src={featuredMovie.movie_banner}
            alt={`${featuredMovie.title} Poster`}
          />

          <h1 className="heading">{featuredMovie.title}</h1>
          <h2 className="heading">
            {featuredMovie.original_title} /{" "}
            {`"${featuredMovie.original_title_romanised}"`}
          </h2>
        </div>
        <div className="film-details">
          <div className="duration">
            <strong>
              {featuredMovie.release_date} / {featuredMovie.running_time} min
            </strong>
          </div>
          <div className="director">
            <strong>Directed by:</strong> {featuredMovie.director}
          </div>
          <div className="producer">
            <strong>Produced by:</strong> {featuredMovie.producer}
          </div>
          <div className="about">
            <h3>About</h3>
            <p>{featuredMovie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

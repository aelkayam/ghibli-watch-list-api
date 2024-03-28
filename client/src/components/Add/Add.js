import "./Add.css";
import React, { useEffect, useState } from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sortType, setSortType] = useState("");

  // load all movies:
  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films").then((res) => {
      res.json().then((data) => {
        if (!data.errors) {
          setResults(data);
        } else {
          setResults([]);
        }
      });
    });
  }, []);

  // filter by title:
  function inputChange(e) {
    e.preventDefault();
    let searchText = e.target.value;
    setQuery(searchText);
    fetch("https://ghibliapi.vercel.app/films").then((res) => {
      res.json().then((data) => {
        if (!data.errors) {
          setResults(() =>
            data.filter((movie) =>
              movie.title.toLowerCase().includes(searchText.toLowerCase())
            )
          );
        } else {
          setResults([]);
        }
      });
    });
  }

  // sort by properties
  useEffect(() => {
    function sortMovies(type) {
      const types = {
        none: "",
        releaseDate: "release_date",
        runningTime: "running_time",
        reviews: "rt_score",
      };
      const sortProperty = types[type];
      const sorted = [...results].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setResults(sorted);
    }

    sortMovies(sortType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="sort-wrapper">
            <span className="sort-title">Sort by: </span>
            <select
              className="select"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="releaseDate">Release date</option>
              <option value="runningTime">Running time</option>
              <option value="reviews">Reviews</option>
            </select>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="search for a movie"
              value={query}
              onChange={inputChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

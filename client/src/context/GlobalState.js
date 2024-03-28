import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initiall state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : []
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  function addMovieToWatchlist(movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  }

  function removeMovieFromWatchlist(id) {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  }

  function addMovieToWatched(movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  }

  function moveToWatchlist(movie) {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  }

  function removeFromWatched(id) {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  }

  function clearWatchlist() {
    dispatch({ type: "CLEAR_WATCHLIST" });
  }

  function clearWatched() {
    dispatch({ type: "CLEAR_WATCHED" });
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
        clearWatchlist,
        clearWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

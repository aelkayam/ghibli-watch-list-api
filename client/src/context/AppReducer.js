const reducer = (state, action) => {
  switch (action.type) {
    // add new movie to the watch list:
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };

    // remove a movie from the watch list:
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        )
      };

    // add a movie from watch list to watched:
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload]
      };

    // move a movie from watched back to watch list:
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [...state.watchlist, action.payload]
      };

    // remove a movie from watched entirely:
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload)
      };

    // clear all watch list
    case "CLEAR_WATCHLIST":
      return {
        ...state,
        watchlist: []
      };

    // clear all watched list
    case "CLEAR_WATCHED":
      return {
        ...state,
        watched: []
      };
    default:
      return state;
  }
};
export default reducer;

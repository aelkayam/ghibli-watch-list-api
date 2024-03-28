const reducer = (state, action) => {
  switch (action.type) {
    // change background
    case "CHANGE_BACKGROUND":
      return {
        ...state,
        background: [action.payload]
      };

    // change theme
    case "CHANGE_THEME":
      return {
        ...state,
        theme: [action.payload]
      };

    default:
      return state;
  }
};
export default reducer;

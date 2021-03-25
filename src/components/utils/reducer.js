const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TEAMS":
      return {
        ...state,
        teams: action.payload,
      };
    case "GET_LEAGUES":
      return {
        ...state,
        leagues: action.payload,
      };
    case "GET_SEARCH":
      return {
        ...state,
        text: action.payload,
      };
    case "GET_ERROR":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;

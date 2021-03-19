const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TEAMS":
      return {
        ...state,
        teams: action.payload,
        error: false,
      };
    case "GET_LEAGUES":
      return {
        ...state,
        leagues: action.payload,
        error: false,
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

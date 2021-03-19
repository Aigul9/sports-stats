const Reducer = (state, action) => {
  switch (action.type) {
      case 'GET_TEAMS':
          return {
              ...state,
              teams: action.payload
          };
      case 'GET_LEAGUES':
          return {
              ...state,
              leagues: action.payload
          };
      default:
          return state;
  }
};

export default Reducer;
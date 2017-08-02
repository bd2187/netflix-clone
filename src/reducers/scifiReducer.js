const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function scifiReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_SCIFI':
      return {...state, isFetching: true};
    case 'FETCHING_SCIFI_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_SCIFI_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default scifiReducer;

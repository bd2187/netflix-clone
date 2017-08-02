const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function dramasReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_DRAMAS':
      return {...state, isFetching: true};
    case 'FETCHING_DRAMAS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        movies: action.movies
      }
    case 'FETCHING_DRAMAS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default dramasReducer;

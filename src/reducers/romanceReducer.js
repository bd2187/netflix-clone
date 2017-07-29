const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function romanceReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_ROMANCE':
      return {...state, isFetching: true};
    case 'FETCHING_ROMANCE_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_ROMANCE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.err
      }
    default:
      return state;
  }
}
export default romanceReducer;

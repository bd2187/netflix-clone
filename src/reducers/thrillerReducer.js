const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function thrillerReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_THRILLER':
      return {...state, isFetching: true};
    case 'FETCHING_THRILLER_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_THRILLER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default thrillerReducer;

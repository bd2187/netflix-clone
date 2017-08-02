const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function comediesReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_COMEDIES':
      return {...state, isFetching: true};
    case 'FETCHING_COMEDIES_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_COMEDIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default comediesReducer;

const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function horrorReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_HORROR':
      return {...state, isFetching: true};
    case 'FETCHING_HORROR_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_HORROR_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default horrorReducer;

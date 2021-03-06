const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function trendingReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_TRENDING':
      return {...state, isFetching: true};
    case 'FETCHING_TRENDING_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_TRENDING_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default trendingReducer;

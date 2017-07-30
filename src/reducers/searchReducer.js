const initialState = {
  isFetching: false,
  error: '',
  movies: []
}

function searchReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_SEARCH':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCHING_SEARCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        movies: action.movies
      }
    case 'FETCHING_SEARCH_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default searchReducer;

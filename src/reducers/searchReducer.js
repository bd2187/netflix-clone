const initialState = {
  isFetching: false,
  error: '',
  movies: [],
  query: ''
}

function searchReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_SEARCH':
      return {
        ...state,
        isFetching: true,
        query: action.query
      }
    case 'FETCHING_SEARCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        movies: action.movies,
        query: action.query
      }
    case 'FETCHING_SEARCH_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error,
        query: action.query
      }
    default:
      return state;
  }
}

export default searchReducer;

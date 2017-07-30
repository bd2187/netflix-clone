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
    case 'FETCHING_SEARCH_FAILURE':
    default:
      return state;
  }
}

export default searchReducer;

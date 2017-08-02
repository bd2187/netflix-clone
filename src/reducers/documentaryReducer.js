const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function documentariesReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_DOCUMENTAIRES':
      return {...state, isFetching: true};
    case 'FETCHING_DOCUMENTARIES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        movies: action.movies
      }
    case 'FETCHING_DOCUMENTARIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default documentariesReducer;

const initialState = {
  isFetching: false,
  error: '',
  movie: {}
}

function mainMovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_MOVIE':
      return {...state, isFetching: true};
    case 'FETCHING_MAIN_MOVIE_SUCCESS':
      return {...state, isFetching: false, movie: action.movie};
    case 'FETCHING_MAIN_MOVIE_FAILURE':
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}

export default mainMovieReducer;

const movieState = {
  id: 0,
  title: '',
  overview: '',
  poster: '',
  releaseDate: ''
}

function movieReducer (state = movieState, action) {
  switch (action.type) {
    case 'FETCHING_MAIN_MOVIE_SUCCESS':
      return {
        ...state,
        id: action.movie.id,
        title: action.movie.title,
        overview: action.movie.overview,
        poster: action.movie.backdrop_path,
        releaseDate: action.movie.release_date
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
  movie: {}
}

function mainMovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_MOVIE':
      return {...state, isFetching: true};

    case 'FETCHING_MAIN_MOVIE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        movie: movieReducer( state[action.movie], action)
      };

    case 'FETCHING_MAIN_MOVIE_FAILURE':
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}

export default mainMovieReducer;

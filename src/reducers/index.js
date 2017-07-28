import { combineReducers } from 'redux';
import mainMovieReducer from './mainMovieReducer';

const rootReducer = combineReducers({
  mainMovie: mainMovieReducer
});

export default rootReducer;


/*
state = {
  mainMovie: {
    isFetching: false,
    error: '',
    movie: {}
  },
  search: {
    isFetching: false,
    error: '',
    searchedQuery: '',
    movies: []
  },
  documentaries: {
    isFetching: false,
    error: '',
    movies: []
  },
  dramas: {
    isFetching: false,
    error: '',
    movies: []
  },
  horror movies: {
    isFetching: false,
    error: '',
    movies: []
  },
  romantic mvoies: {
    isFetching: false,
    error: '',
    movies: []
  },
  sci-fi: {
    isFetching: false,
    error: '',
    movies: []
  },
  thrillers: {
    isFetching: false,
    error: '',
    movies: []
  },
}
*/

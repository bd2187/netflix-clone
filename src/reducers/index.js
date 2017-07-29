import { combineReducers } from 'redux';
import mainMovieReducer from './mainMovieReducer';
import documentariesReducer from './documentaryReducer';
import comediesReducer from './comediesReducer';
import dramasReducer from './dramasReducer';
import horrorReducer from './horrorReducer';
import romanceReducer from './romanceReducer';
import scifiReducer from './scifiReducer';
import thrillerReducer from './thrillerReducer';
import trendingReducer from './trendingReducer';
import singleFilmReducer from './singleFilmReducer';

const rootReducer = combineReducers({
  mainMovie: mainMovieReducer,
  comedies: comediesReducer,
  documentaries: documentariesReducer,
  dramas: dramasReducer,
  horror: horrorReducer,
  romance: romanceReducer,
  scifi: scifiReducer,
  thriller: thrillerReducer,
  trending: trendingReducer,
  singleFilm: singleFilmReducer
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

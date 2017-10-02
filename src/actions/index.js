import * as constants from '../constants';
import {
  mainMovieEndpoint,
  movieGenreEndpoint,
  trendingMoviesEndpoint,
  movieDetailsEndpoint,
  trailersEndpoint,
  searchEndpoint
} from '../config/endpoints';

export function fetchGenre(
  fetchingConstant,
  successConstant,
  failureConstant,
  genreId
) {
  return async function(dispatch) {
    dispatch({ type: fetchingConstant });
    try {
      const response = await fetch(movieGenreEndpoint(genreId));
      const data = await response.json();
      dispatch({
        type: successConstant,
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: failureConstant,
        error: err.toString()
      });
    }
  };
}

export function fetchMainMovie() {
  return async function(dispatch) {
    dispatch({ type: constants.FETCHING_MOVIE });
    try {
      const response = await fetch(mainMovieEndpoint);
      const data = await response.json();
      dispatch({
        type: constants.FETCHING_MAIN_MOVIE_SUCCESS,
        movie: data.results[0]
      });
    } catch (err) {
      dispatch({
        type: constants.FETCHING_MAIN_MOVIE_FAILURE,
        error: err.toString()
      });
    }
  };
}

export function fetchTrending() {
  return async function(dispatch) {
    dispatch({ type: constants.FETCHING_TRENDING });
    try {
      const response = await fetch(trendingMoviesEndpoint);
      const data = await response.json();
      dispatch({
        type: constants.FETCHING_TRENDING_SUCCESS,
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: constants.FETCHING_TRENDING_FAILURE,
        error: err.toString()
      });
    }
  };
}

export function fetchSingleFilm(id) {
  return async function(dispatch) {
    dispatch({ type: constants.FETCHING_SINGLE_FILM });
    try {
      const response = await fetch(movieDetailsEndpoint(id));
      var data = await response.json();
      dispatch({
        type: constants.FETCHING_SINGLE_FILM_SUCCESS,
        film: data
      });
      dispatch(fetchTrailers(id));
    } catch (err) {
      dispatch({
        type: constants.FETCHING_SINGLE_FILM_FAILURE,
        error: err.toString()
      });
    }
  };
}

function fetchTrailers(id) {
  return async function(dispatch) {
    dispatch({ type: constants.FETCHING_TRAILERS });

    try {
      const response = await fetch(trailersEndpoint(id));
      const data = await response.json();
      dispatch({
        type: constants.FETCHING_TRAILERS_SUCCESS,
        trailers: [data.results[0], data.results[1]]
      });
    } catch (err) {
      dispatch({
        type: constants.FETCHING_TRAILER_FAILURE,
        error: err.toString()
      });
    }
  };
}

export function searchFilm(query) {
  return async function(dispatch) {
    dispatch({ type: constants.FETCHING_SEARCH, query });

    try {
      const response = await fetch(searchEndpoint(query));
      const data = await response.json();
      dispatch({
        type: constants.FETCHING_SEARCH_SUCCESS,
        query,
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: constants.FETCHING_SEARCH_FAILURE,
        query,
        error: err.toString()
      });
    }
  };
}

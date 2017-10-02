import axios from 'axios';
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
    dispatch({ type: 'FETCHING_MOVIE' });
    try {
      const response = await fetch(mainMovieEndpoint);
      const data = await response.json();
      dispatch({
        type: 'FETCHING_MAIN_MOVIE_SUCCESS',
        movie: data.results[0]
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_MAIN_MOVIE_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchTrending() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_TRENDING' });
    try {
      const response = await fetch(trendingMoviesEndpoint);
      const data = await response.json();
      dispatch({
        type: 'FETCHING_TRENDING_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_TRENDING_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchSingleFilm(id) {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_SINGLE_FILM' });
    try {
      const response = await fetch(movieDetailsEndpoint(id));
      var data = await response.json();
      dispatch({
        type: 'FETCHING_SINGLE_FILM_SUCCESS',
        film: data
      });
      dispatch(fetchTrailers(id));
    } catch (err) {
      dispatch({
        type: 'FETCHING_SINGLE_FILM_FAILURE',
        error: err.toString()
      });
    }
  };
}

function fetchTrailers(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_TRAILERS' });
    axios
      .get(trailersEndpoint(id))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_TRAILERS_SUCCESS',
          trailers: [result.data.results[0], result.data.results[1]]
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_TRAILER_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function searchFilm(query) {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_SEARCH', query });
    axios
      .get(searchEndpoint(query))
      .then(function(results) {
        dispatch({
          type: 'FETCHING_SEARCH_SUCCESS',
          query,
          movies: results.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_SEARCH_FAILURE',
          query,
          error: err.toString()
        })
      );
  };
}

import axios from 'axios';
import {
  mainMovieEndpoint,
  movieGenreEndpoint,
  trendingMoviesEndpoint,
  movieDetailsEndpoint,
  trailersEndpoint,
  searchEndpoint
} from '../config/endpoints';

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

export function fetchActionAdventure() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_ACTION_ADVENTURE' });
    try {
      const response = await fetch(movieGenreEndpoint(28));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_ACTION_ADVENTURE_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_ACTION_ADVENTURE_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchComedies() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_COMEDIES' });
    try {
      const response = await fetch(movieGenreEndpoint(35));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_COMEDIES_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_COMEDIES_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchDocumentaries() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_DOCUMENTARIES' });
    try {
      const response = await fetch(movieGenreEndpoint(99));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_DOCUMENTARIES_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_DOCUMENTARIES_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchDramas() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_DRAMAS' });
    try {
      const response = await fetch(movieGenreEndpoint(18));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_DRAMAS_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_DRAMAS_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchHorror() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_HORROR' });
    try {
      const response = await fetch(movieGenreEndpoint(27));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_HORROR_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_HORROR_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchRomance() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_ROMANCE' });
    try {
      const response = await fetch(movieGenreEndpoint(10749));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_ROMANCE_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_ROMANCE_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchScifi() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_SCIFI' });
    try {
      const response = await fetch(movieGenreEndpoint(878));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_SCIFI_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_SCIFI_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchThriller() {
  return async function(dispatch) {
    dispatch({ type: 'FETCHING_THRILLER' });
    try {
      const response = await fetch(movieGenreEndpoint(53));
      const data = await response.json();
      dispatch({
        type: 'FETCHING_THRILLER_SUCCESS',
        movies: data.results
      });
    } catch (err) {
      dispatch({
        type: 'FETCHING_THRILLER_FAILURE',
        error: err.toString()
      });
    }
  };
}

export function fetchSingleFilm(id) {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_SINGLE_FILM' });
    axios
      .get(movieDetailsEndpoint(id))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_SINGLE_FILM_SUCCESS',
          film: result.data
        });
        dispatch(fetchTrailers(id));
      })
      .catch(err => {
        dispatch({
          type: 'FETCHING_SINGLE_FILM_FAILURE',
          error: err.toString()
        });
      });
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
    // add error handling
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

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

// export function fetchMainMovie() {
//   return function(dispatch) {
//     dispatch({ type: 'FETCHING_MOVIE' });
//     axios
//       .get(mainMovieEndpoint)
//       .then(function(result) {
//         const numberOneTrending = result.data.results[0];
//         dispatch({
//           type: 'FETCHING_MAIN_MOVIE_SUCCESS',
//           movie: numberOneTrending
//         });
//       })
//       .catch(err =>
//         dispatch({
//           type: 'FETCHING_MAIN_MOVIE_FAILURE',
//           error: err.toString()
//         })
//       );
//   };
// }

export function fetchActionAdventure() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_ACTION_ADVENTURE' });
    axios
      .get(movieGenreEndpoint(28))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_ACTION_ADVENTURE_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_ACTION_ADVENTURE_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchDocumentaries() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_DOCUMENTARIES' });
    axios
      .get(movieGenreEndpoint(99))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_DOCUMENTARIES_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_DOCUMENTARIES_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchComedies() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_COMEDIES' });
    axios
      .get(movieGenreEndpoint(35))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_COMEDIES_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_COMEDIES_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchDramas() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_DRAMAS' });
    axios
      .get(movieGenreEndpoint(18))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_DRAMAS_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_DRAMAS_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchHorror() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_HORROR' });
    axios
      .get(movieGenreEndpoint(27))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_HORROR_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_HORROR_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchRomance() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_ROMANCE' });
    axios
      .get(movieGenreEndpoint(10749))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_ROMANCE_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_ROMANCE_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchScifi() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_SCIFI' });
    axios
      .get(movieGenreEndpoint(878))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_SCIFI_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_SCIFI_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchThriller() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_THRILLER' });
    axios
      .get(movieGenreEndpoint(53))
      .then(function(result) {
        dispatch({
          type: 'FETCHING_THRILLER_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_THRILLER_FAILURE',
          error: err.toString()
        })
      );
  };
}

export function fetchTrending() {
  return function(dispatch) {
    dispatch({ type: 'FETCHING_TRENDING' });
    axios
      .get(trendingMoviesEndpoint)
      .then(function(result) {
        dispatch({
          type: 'FETCHING_TRENDING_SUCCESS',
          movies: result.data.results
        });
      })
      .catch(err =>
        dispatch({
          type: 'FETCHING_TRENDING_FAILURE',
          error: err.toString()
        })
      );
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

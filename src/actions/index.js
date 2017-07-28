import axios from 'axios';
import { mainMovieEndpoint, movieGenreEndpoint } from '../config/endpoints';

export function fetchMainMovie () {
  return function (dispatch) {
    dispatch({type: 'FETCHING_MOVIE'});
    axios.get(mainMovieEndpoint)
      .then(function(result){
        const numberOneTrending = result.data.results[0];
        dispatch({
          type: 'FETCHING_MAIN_MOVIE_SUCCESS',
          movie: numberOneTrending
        })
      })
      .catch( (err) => dispatch({
        type: 'FETCHING_MAIN_MOVIE_FAILURE',
        error: err
      }) )
  }
}

export function fetchMovieByGenre (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_DOCUMENTARIES'})
    axios.get(movieGenreEndpoint(id))
      .then(function(result){
        dispatch({
          type: 'FETCHING_DOCUMENTARIES_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_DOCUMENTARIES_FAILURE',
        error: err
      }))
  }
}

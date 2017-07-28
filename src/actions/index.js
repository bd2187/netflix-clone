import axios from 'axios';
import { mainMovieEndpoint } from '../config/endpoints';

export function fetchMainMovie () {
  return function (dispatch) {
    dispatch({type: 'FETCHING_MOVIE'});
    axios.get(mainMovieEndpoint)
      .then( (result) => dispatch({
        type: 'FETCHING_MAIN_MOVIE_SUCCESS',
        movie: result.data.results[0]
      }) )
      .catch( (err) => dispatch({
        type: 'FETCHING_MAIN_MOVIE_FAILURE',
        error: err
      }) )
  }
}

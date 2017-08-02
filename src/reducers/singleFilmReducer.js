const trailersInitialState = {
  isFetching: true,
  error: '',
  trailersArr: []
}

function trailersReducer (state = trailersInitialState, action) {
  switch (action.type) {
    case 'FETCHING_TRAILERS':
      return {
        ...state,
        isFetching: true
      }

    case 'FETCHING_TRAILERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        trailersArr: action.trailers
      }

    case 'FETCHING_TRAILER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
}

const singleFilmInitialState = {
  isFetching: true,
  error: '',
  film: {},
  trailers: trailersInitialState
}

function singleFilmReducer (state = singleFilmInitialState, action) {
  switch (action.type) {
    case 'FETCHING_SINGLE_FILM':
      return { ...state, isFetching: true };

    case 'FETCHING_SINGLE_FILM_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        film: action.film,
      };

    case 'FETCHING_SINGLE_FILM_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case 'FETCHING_TRAILERS':
    case 'FETCHING_TRAILERS_SUCCESS':
    case 'FETCHING_COMEDIES_FAILURE':
      return {
        ...state,
        trailers: trailersReducer(state.trailers, action)
      }

    default:
      return state;
  }
}

export default singleFilmReducer;

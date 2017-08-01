const initialState = {
  isFetching: true,
  error: '',
  movies: []
}

function actionAdventureReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_ACTION_ADVENTURE':
      return {...state, isFetching: true};
    case 'FETCHING_ACTION_ADVENTURE_SUCCESS':
      return {
        ...state,
        isFetching: false,
         error: '',
        movies: action.movies
      }
    case 'FETCHING_ACTION_ADVENTURE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.err
      }
    default:
      return state;
  }
}
export default actionAdventureReducer;

import API_KEY from './API_KEY';

export const mainMovieEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2017`;

export function movieDetailEndpoint(movieID) {
  return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
}

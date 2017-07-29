import API_KEY from './API_KEY';

export const mainMovieEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2017`;

export function movieGenreEndpoint (genreID) {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
}

export const trendingMoviesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export function movieDetailsEndpoint (id) {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
}

export function trailersEndpoint (id) {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
}

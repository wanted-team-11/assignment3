const API_KEY = process.env.REACT_APP_API_KEY;

const getMovieDetail = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`;

const getMoviePoster = (image: string | undefined) =>
  `https://image.tmdb.org/t/p/original${image}`;

const getMovieVideo = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

const UPCOMING = () => {};
const TOP_RATED = () => {};
const SEARCH_RESULT = () => {};
const NOW_PLAYING = () => {};

/**
 * TODO: MOVIE_DETAIL랑 전부 같은 URL이다. 각기 맞는 것들로 수정 요망
 */
export const API = {
  getMovieDetail,
  getMoviePoster,
  getMovieVideo,
  UPCOMING,
  TOP_RATED,
  SEARCH_RESULT,
  NOW_PLAYING,
};

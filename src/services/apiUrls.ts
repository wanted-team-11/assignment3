const API_KEY = process.env.REACT_APP_API_KEY;

const getMovieDetail = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`;

const getMoviePoster = (image: string | undefined) =>
  `https://image.tmdb.org/t/p/original${image}`;

const getMovieVideo = (id: string) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

export const API = {
  getMovieDetail,
  getMoviePoster,
  getMovieVideo,
};

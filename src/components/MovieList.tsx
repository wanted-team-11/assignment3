import {
  UpcomingMovie,
  TopRatedMovie,
  NowPlayingMovie,
} from "./types/movieTypes";

const MovieList = ({
  movieList,
}: {
  movieList?: UpcomingMovie[] | TopRatedMovie[] | NowPlayingMovie[];
}) => {
  if (movieList === undefined || movieList.length <= 0) {
    return <div>찾으시는 영화가 없습니다...</div>;
  }
  return <div></div>;
};

export default MovieList;

import { useQuery } from "@tanstack/react-query";
import { API } from "./api/apiUrls";
import { useParams } from "react-router-dom";
import * as S from "./style/MovieDetail.styled";
import { Movie } from "./types/movieDetailType";
import { Video } from "./types/videoType";

import VideoComponent from "./components/VideoComponent";
import Poster from "./components/Poster";
import InfoTable from "./components/InfoTable";
import Overview from "./components/Overview";
import MovieRate from "./components/MovieRate";

import LoadingPortal from "./utils/Portal";
import LoadingCover from "./components/LoadingCover";

const MovieDetailPage = () => {
  const params = useParams();

  const getMovieDetail = async () => {
    if (params.id === undefined) return;
    const res = await fetch(API.getMovieDetail(params.id));
    return res.json() as Promise<Movie>;
  };

  const movieDetail = useQuery(["get-movie-detail", params.id], getMovieDetail);

  const getMovieVideo = async () => {
    if (params.id === undefined) return;
    const res = await fetch(API.getMovieVideo(params.id));
    return res.json() as Promise<Video>;
  };

  const movieVideo = useQuery(["get-movie-video", params.id], getMovieVideo);

  const posterUrl = API.getMoviePoster(movieDetail.data?.poster_path);

  return (
    <>
      {movieDetail.isLoading && (
        <LoadingPortal>
          <LoadingCover />
        </LoadingPortal>
      )}
      <S.Container>
        <S.MovieContainer>
          <S.MovieVideo>
            <VideoComponent videoId={movieVideo.data?.results[0].key} />
          </S.MovieVideo>
          <S.MovieInfoContainer>
            <S.MoviePoster>
              <Poster src={posterUrl} />
            </S.MoviePoster>
            <S.MovieDescription>
              <S.TitleWrapper>
                <S.Title>{movieDetail.data?.original_title}</S.Title>
                <S.Rating>
                  <MovieRate rate={movieDetail.data?.vote_average || 0} />(
                  {movieDetail.data?.vote_average !== undefined &&
                    (movieDetail.data?.vote_average / 2).toFixed(1)}
                  )
                </S.Rating>
              </S.TitleWrapper>
              <InfoTable details={movieDetail.data} />
              <Overview>{movieDetail.data?.overview}</Overview>
            </S.MovieDescription>
          </S.MovieInfoContainer>
        </S.MovieContainer>
      </S.Container>
    </>
  );
};

export default MovieDetailPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "../types/movie.type";
import * as S from "./styles/MoviesContainer.styled";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const MoviesContainer = ({
  movies,
  getData,
}: {
  movies: Movies;
  getData: UseQueryResult<AxiosResponse<any, Movies>, unknown>;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    poster_path,
    title,
    vote_average,
    release_date,
    id,
    original_language,
  } = movies;
  const nav = useNavigate();

  const MoveDetailMovie = () => {
    nav(`/movie-detail/${id}`);
  };

  const changeLoading = () => {
    setIsLoading(false);
  };

  return (
    <S.MoviesWrapper>
      <S.MovieWrapper>
        <S.WrapperImg onClick={MoveDetailMovie}>
          {isLoading ? (
            <S.MovieImg
              src={
                "https://cdn.discordapp.com/attachments/1016620527223308320/1016942292126412800/Spin-1.4s-257px.gif"
              }
              onLoad={() => {
                changeLoading();
              }}
            />
          ) : (
            <S.MovieImg
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
            />
          )}
        </S.WrapperImg>
        <S.WrapperTitle onClick={MoveDetailMovie}>{title}</S.WrapperTitle>
        <S.ReleaseDate>
          <div>{release_date}</div>
          <div>{original_language}</div>
        </S.ReleaseDate>
        <S.MoviesContainer>평균 ★{vote_average}</S.MoviesContainer>
      </S.MovieWrapper>
    </S.MoviesWrapper>
  );
};

export default MoviesContainer;

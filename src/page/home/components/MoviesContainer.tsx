import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "../types/movie.type";
import * as S from "./styles/MoviesContainer.styled";

const MoviesContainer = ({ movies }: { movies: Movies }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { poster_path, title, vote_average, release_date, id } = movies;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/movie-detail/${id}`);
  };

  const changeLoadingStatus = () => {
    setIsLoading(false);
  };

  return (
    <S.MoviesWrapper>
      <S.MovieWrapper>
        <S.WrapperImg onClick={goToDetail}>
          {isLoading ? (
            <S.MovieImg
              src={
                "https://cdn.discordapp.com/attachments/1016620527223308320/1016942292126412800/Spin-1.4s-257px.gif"
              }
              onLoad={() => {
                changeLoadingStatus();
              }}
            />
          ) : (
            <S.MovieImg
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
            />
          )}
        </S.WrapperImg>
        <S.WrapperTitle onClick={goToDetail}>{title}</S.WrapperTitle>
        <S.ReleaseDate>
          <div>{release_date}</div>
        </S.ReleaseDate>
        <S.MoviesContainer>평균 ★{vote_average}</S.MoviesContainer>
      </S.MovieWrapper>
    </S.MoviesWrapper>
  );
};

export default MoviesContainer;

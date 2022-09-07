import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  NowPlayingMovieAPi,
  PopularMovieAPi,
  TopRatedMovieAPi,
  UpcoMingMovieAPi,
} from "../../api/api";
import MoviesContainer from "./MoviesContainer";
import { Movies } from "../types/movie.type";
import * as S from "./styles/HomePage.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";

const HomePageContainer = () => {
  const PopularMovie_query = useQuery(["Popular_Movielist"], () =>
    PopularMovieAPi()
  );

  const NowPlayingMovie_query = useQuery(["NowPlaying_Movielist"], () =>
    NowPlayingMovieAPi()
  );

  const UpcomingMovie_query = useQuery(["Upcoming_Movielist"], () =>
    UpcoMingMovieAPi()
  );

  const TopRatedMovie_query = useQuery(["TopRated_Movielist"], () =>
    TopRatedMovieAPi()
  );

  const HOMEPAGE_CONTAINER = [
    {
      id: 1,
      title: "인기 영화",
      path: "/popular",
      getData: PopularMovie_query,
    },
    {
      id: 2,
      title: "현재 상영중인 영화",
      path: "/now-playing",
      getData: NowPlayingMovie_query,
    },
    {
      id: 3,
      title: "개봉 예정인 영화",
      path: "/upcoming",
      getData: UpcomingMovie_query,
    },
    {
      id: 4,
      title: "Top 랭킹 영화",
      path: "/top-rated",
      getData: TopRatedMovie_query,
    },
  ];

  SwiperCore.use([Navigation]);

  return (
    <>
      {HOMEPAGE_CONTAINER.map(({ id, title, path, getData }) => (
        <S.Wrapper key={id}>
          <S.TitleContainer>
            <S.CategoryTitle>{title}</S.CategoryTitle>
            <Link to={path}>View All</Link>
          </S.TitleContainer>

          <Swiper
            navigation
            slidesPerView={4}
            slidesPerGroup={2}
            allowTouchMove={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            <S.MoviesContainer>
              {getData.isSuccess &&
                getData.data.data.results.map((movies: Movies) => {
                  return (
                    <SwiperSlide>
                      <MoviesContainer
                        key={movies.id}
                        movies={movies}
                        getData={getData}
                      />
                    </SwiperSlide>
                  );
                })}
            </S.MoviesContainer>
          </Swiper>
        </S.Wrapper>
      ))}
    </>
  );
};

export default HomePageContainer;

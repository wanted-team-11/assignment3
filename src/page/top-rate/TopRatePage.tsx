import { useEffect } from "react";
import styled from "styled-components";
import InfiniteScrollList from "../../components/InfiniteScrollList";
import { fetchTopRatedMovies } from "../../services/fetchMovies";

const TopRatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopRateContainer>
        <MovieContainer>
          <Title>Top 랭킹 영화</Title>
          <hr />
        </MovieContainer>
      </TopRateContainer>
      <InfiniteScrollList fetchCallback={fetchTopRatedMovies} />
    </>
  );
};
export default TopRatePage;
const TopRateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieContainer = styled.ul`
  max-width: 1180px;
  width: 100%;
`;

const Title = styled.h1`
  padding-left: 70px;
  font-size: 22px;
  font-weight: 700;
`;

import styled from "styled-components";
import InfiniteScrollList from "../../components/InfiniteScrollList";
import { fetchTopRatedMovies } from "../../services/fetchMovies";

const TopRatePage = () => {
  return (
    <>
      <TopRateContainer>
        <MovieContainer>
          <Title>TOP RATE</Title>
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
  font-size: 2rem;
  font-weight: 700;
`;

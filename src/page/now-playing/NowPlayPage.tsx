import { useEffect } from "react";
import styled from "styled-components";
import InfiniteScrollList from "../../components/InfiniteScrollList";
import { fetchNowPlayingMovies } from "../../services/fetchMovies";

const NowPlayPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NowPlayContainer>
        <MovieContainer>
          <Title>현재 상영중인 영화</Title>
          <hr />
        </MovieContainer>
      </NowPlayContainer>
      <InfiniteScrollList fetchCallback={fetchNowPlayingMovies} />
    </>
  );
};
export default NowPlayPage;
const NowPlayContainer = styled.div`
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

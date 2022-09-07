import { useEffect } from "react";
import styled from "styled-components";
import InfiniteScrollList from "../../components/InfiniteScrollList";
import { fetchPopularMovies } from "../../services/fetchMovies";

const PopularPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Container>
        <Wrapper>
          <h1>인기 영화</h1>
        </Wrapper>
      </Container>
      <InfiniteScrollList fetchCallback={fetchPopularMovies} />
    </>
  );
};

export default PopularPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  font-size: 22px;
  padding-left: 70px;
  font-weight: bold;
`;

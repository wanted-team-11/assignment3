import { useEffect } from "react";
import styled from "styled-components";
import InfiniteScrollList from "../../components/InfiniteScrollList";
import { fetchUpcoMingMovies } from "../../services/fetchMovies";

const UpcomingPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Container>
        <Wrapper>
          <h1>개봉 예정작</h1>
        </Wrapper>
      </Container>
      <InfiniteScrollList fetchCallback={fetchUpcoMingMovies} />
    </>
  );
};

export default UpcomingPage;

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

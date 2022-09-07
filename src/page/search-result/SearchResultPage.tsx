import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import InfiniteScrollList from "../../components/InfiniteScrollList";
import { fetchSearchResultMovies } from "../../services/fetchMovies";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Container>
        <Wrapper>
          <h1>{query}를 검색한 결과입니다.</h1>
        </Wrapper>
      </Container>
      <InfiniteScrollList
        fetchCallback={fetchSearchResultMovies}
        query={query}
      />
    </>
  );
};

export default SearchResultPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  padding-left: 70px;
  font-size: 22px;
  font-weight: bold;
`;

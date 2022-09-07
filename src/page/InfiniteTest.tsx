import InfiniteScrollList from "../components/InfiniteScrollList";
import { fetchSearchResultMovies } from "../services/fetchMovies";

/**
 * 무한스크롤 테스트 컴포넌트
 * 프로젝트 완성시 삭제할 것
 */
const InfiniteTest = () => {
  return (
    <InfiniteScrollList fetchCallback={fetchSearchResultMovies} query={"hi"} />
  );
};

export default InfiniteTest;

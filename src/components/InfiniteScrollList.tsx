import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Movie, ResponseProps } from "../services/model";

type Props = {
  fetchCallback: (pageParam: number, query?: string) => Promise<ResponseProps>;
  query?: string;
};

const InfiniteScrollList = ({ fetchCallback, query }: Props) => {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  const { data, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["movie"],
      ({ pageParam = 1 }) => fetchCallback(pageParam, query),
      {
        getNextPageParam: (lastPage) => lastPage.page + 1,
      }
    );

  const handleErrorLoadImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/noImage.png";
  };

  const handleMovieClick = (id: Movie["id"]) => navigate(`/movie-detail/${id}`);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <InfiniteScrollContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <MovieContainer>
            {data &&
              data.pages.map(({ page, results }) => (
                <Fragment key={page}>
                  {results.map(({ id, poster_path, title, vote_average }) => (
                    <MovieWrapper key={id} onClick={() => handleMovieClick(id)}>
                      <MoviePosterImage
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        onError={handleErrorLoadImage}
                        alt="썸네일"
                      />
                      <MovieTitle>{title}</MovieTitle>
                      <MovieDescribe>평균 별점 : {vote_average}</MovieDescribe>
                    </MovieWrapper>
                  ))}
                </Fragment>
              ))}
          </MovieContainer>
          <p ref={ref}>
            {isFetchingNextPage ? "Loading more..." : "Nothing more to load"}
          </p>
        </>
      )}
    </InfiniteScrollContainer>
  );
};

export default InfiniteScrollList;

const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieContainer = styled.ul`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MovieWrapper = styled.li`
  width: 200px;
  margin: 20px 5px;
  &:hover {
    cursor: pointer;
  }
`;

const MoviePosterImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(105, 105, 105, 0.1);
`;

const MovieTitle = styled.h3`
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5px 0;
`;

const MovieDescribe = styled.p`
  font-size: 12px;
`;

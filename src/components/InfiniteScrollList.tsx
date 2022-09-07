import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import styled from "styled-components";

type Result = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

type Dates = {
  maximum: string;
  minimum: string;
};

type Schema = {
  page: number;
  results: Result[];
  dates?: Dates;
  total_pages: number;
  total_results: number;
};

async function api<T>(url: string, page: number): Promise<T> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${url}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await (response.json() as Promise<T>);
  return data;
}

const InfiniteScrollList = ({ pageName }: { pageName: string }) => {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["projects"],
    async ({ pageParam = 1 }) => {
      const res = await api<Schema>(pageName, pageParam);
      return res;
    },
    {
      getNextPageParam: (lastPage) => lastPage && lastPage.page + 1,
    }
  );

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/logo192.png";
  };

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
        <MovieContainer>
          {data &&
            data.pages.map((response) => (
              <Fragment key={response.page}>
                {response.results.map(
                  ({ id, poster_path, title, release_date, vote_average }) => (
                    <li key={id}>
                      <ImageBox>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                          onError={onErrorImg}
                          alt="썸네일"
                        />
                      </ImageBox>
                      <div className="infoBox">
                        <p>{title}</p>
                        <p>
                          {` ${release_date.split("-")[0]}년
                          ${release_date.split("-")[1]}월 
                          ${release_date.split("-")[2]}일 `}
                        </p>
                        <p>평점: {vote_average}</p>
                      </div>
                    </li>
                  )
                )}
              </Fragment>
            ))}
          <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load Newer"
                : "Nothing more to load"}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? "Background Updating..."
              : null}
          </div>
        </MovieContainer>
      )}
    </InfiniteScrollContainer>
  );
};
export default InfiniteScrollList;
const InfiniteScrollContainer = styled.div`
  width: 100%;
`;
const MovieContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  li {
    margin: 5px;
    width: 200px;
  }
`;
const ImageBox = styled.div`
  width: 100%;
  img {
    width: inherit;
    border-radius: 5px;
    box-shadow: 0px 0px 7px rgba(105, 105, 105, 0.1);
  }
`;

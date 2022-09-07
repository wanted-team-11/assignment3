import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";

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

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      <h1>Infinite Loading</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data &&
            data.pages.map((response) => (
              <>
                {response &&
                  response.results.map(({ id, poster_path, title }) => (
                    <p key={id}>
                      <img
                        src={
                          `https://image.tmdb.org/t/p/w500/${poster_path}` || ""
                        }
                        alt={`${title} 대체이미지`}
                      />
                      <div>{title}</div>
                    </p>
                  ))}
              </>
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
        </>
      )}
    </div>
  );
};
export default InfiniteScrollList;

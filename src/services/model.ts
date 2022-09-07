export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
  vote_count: number;
  overview: string;
  release_date: string;
  original_title: string;
  original_language: string;
  genre_ids: number[];
  backdrop_path: string | null;
  popularity: number;
  video: boolean;
  adult: boolean;
}

export interface ResponseProps {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: string;
    minimum: string;
  };
}

import axios from "axios";
import { ResponseProps } from "./model";

const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

/**
 * fetch error handling
 */
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
  }
);

export const fetchNowPlayingMovies = async (
  pageParam: number
): Promise<ResponseProps> => {
  const response = await instance.get(
    `movie/now_playing?api_key=${API_KEY}&page=${pageParam}`
  );
  return response.data;
};

export const fetchUpcoMingMovies = async (
  pageParam: number
): Promise<ResponseProps> => {
  const response = await instance.get(
    `movie/upcoming?api_key=${API_KEY}&page=${pageParam}`
  );
  return response.data;
};

export const fetchTopRatedMovies = async (
  pageParam: number
): Promise<ResponseProps> => {
  const response = await instance.get(
    `movie/top_rated?api_key=${API_KEY}&page=${pageParam}`
  );
  return response.data;
};

export const fetchPopularMovies = async (
  pageParam: number
): Promise<ResponseProps> => {
  const response = await instance.get(
    `movie/popular?api_key=${API_KEY}&page=${pageParam}`
  );
  return response.data;
};

export const fetchSearchResultMovies = async (
  pageParam: number,
  query?: string
): Promise<ResponseProps> => {
  const response = await instance.get(
    `search/movie?api_key=${API_KEY}&page=${pageParam}&query=${query}`
  );
  return response.data;
};

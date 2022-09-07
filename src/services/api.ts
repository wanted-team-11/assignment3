import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const PopularMovieAPi = async () => {
  const res = await baseApi.get(
    `/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return res;
};

export const NowPlayingMovieAPi = async () => {
  const res = await baseApi.get(
    `/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res;
};

export const UpcoMingMovieAPi = async () => {
  const res = await baseApi.get(
    `/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res;
};

export const TopRatedMovieAPi = async () => {
  const res = await baseApi.get(
    `/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res;
};

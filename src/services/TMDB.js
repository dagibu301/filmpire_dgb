import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdb",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${tmdbKey}&page=${page}`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;

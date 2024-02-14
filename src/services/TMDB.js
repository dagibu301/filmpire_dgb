import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdb",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    //* Get genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbKey}`,
    }),
    //* Get Movies by [type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?api_key=${tmdbKey}&page=${page}`;
        }
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&api_key=${tmdbKey}&page=${page}`;
        }

        return `movie/popular?api_key=${tmdbKey}&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;

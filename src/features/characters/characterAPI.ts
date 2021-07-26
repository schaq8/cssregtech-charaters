// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Character } from "./types";

// Define a service using a base URL and expected endpoints
export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (builder) => ({
    getCharactersByPage: builder.query({
      //<Character[], number>
      query: (page) => `character?page=${page}`,
    }),
    getCharacterById: builder.query({
      //<Character, string>
      query: (id) => `character/${id}`,
    }),
    getEpisodeById: builder.query({
      //<Character, string>
      query: (id) => `episode/${id}`,
    }),
    getLocationById: builder.query({
      //<Character, string>
      query: (id) => `location/${id}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterByIdQuery, useGetCharactersByPageQuery } =
  characterApi;

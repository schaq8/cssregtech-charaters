// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Character, Characters, Location, Episode } from "./types";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "rickandmortyapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, number>({
      query: (page = 1) => `character/?page=${page}`,
    }),
    getCharacter: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
    getEpisode: builder.query<Episode, number>({
      query: (id) => `episode/${id}`,
    }),
    getLocation: builder.query<Location, number>({
      query: (id) => `location/${id}`,
    }),
  }),
});

export const getId = (url?: string) => Number(url?.split("/")?.pop());
export const getPageNumber = (url?: string) => Number(url?.split("=")?.pop());

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterQuery, useGetCharactersQuery } = api;

export default api;

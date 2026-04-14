import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pokemontcg.io/v2/",
  }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (search = "") =>
        search
          ? `cards?q=name:${search}*&pageSize=12`
          : `cards?pageSize=12`,
    }),
  }),
});

export const { useGetCardsQuery } = pokemonApi;
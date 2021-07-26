import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = (name: string) =>
  createSlice({
    name,

    initialState: 0,

    reducers: {
      set: (state: number, action: PayloadAction<number>) => action.payload,
    },
  });

export const character = slice("character");
export const location = slice("location");
export const episode = slice("episode");

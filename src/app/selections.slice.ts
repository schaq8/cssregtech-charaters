import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const slice = (name: string) =>
  createSlice({
    name,

    initialState: 0,

    reducers: {
      set: (state: number, action: PayloadAction<number>) => action.payload,
    },
  });

// const selector =
//   (name: string) =>
//   (state: RootState): number =>
//     state[name] as number;

// const factory = (name: string) => ({
//   slice: slice(name),
//   selector: selector(name),
// });

export const character = slice("character");
export const episode = slice("episode");
export const location = slice("location");

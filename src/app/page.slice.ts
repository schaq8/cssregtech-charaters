import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface pageState {
  value: number;
}

// Define the initial state using that type
const initialState: pageState = {
  value: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    goNextPage: (state) => {
      state.value += 1;
    },
    goPrevPage: (state) => {
      state.value -= 1;
    },
  },
});

export const { goNextPage, goPrevPage } = pageSlice.actions;
export default pageSlice.reducer;

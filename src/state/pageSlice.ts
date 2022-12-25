import { createSlice } from "@reduxjs/toolkit";

export interface pageState {
  page: number;
}

const initialState: pageState = {
  page: 0,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    next: (state) => {
      state.page += 1;
    },
    previus: (state) => {
      state.page -= 1;
    },
    changeButton: (state) => {
      state.page = 1;
    },
  },
});

export const { next, previus, changeButton } = pageSlice.actions;

export default pageSlice.reducer;

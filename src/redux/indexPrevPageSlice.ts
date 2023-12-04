import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPage } from "./types";

const initialState: IPage = {
  value: 0,
};

export const indexPrevPageSlice = createSlice({
  name: "indexPrevPage",
  initialState,
  reducers: {
    setPrevPage: (state = initialState, action: PayloadAction<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});
export const { setPrevPage } = indexPrevPageSlice.actions;
export default indexPrevPageSlice.reducer;

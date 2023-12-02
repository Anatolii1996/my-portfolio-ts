import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ObjectId } from "mongodb";
import { IComment, IMessage } from "./types";
import type { RootState } from "./store";

const initialState: IComment[] = [];
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state = initialState, action: PayloadAction<IMessage>) => {
      return [...state, action.payload];
    },
  },
});

export const { setComments } = chatSlice.actions;
export const selectComments = (state: RootState) => state.comments;
export default chatSlice.reducer;

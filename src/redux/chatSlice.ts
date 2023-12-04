import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { IComment, IMessage } from "./types";
import type { RootState } from "./store";

const initialState: IComment[] = [];
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state = initialState, action: PayloadAction<IComment[]>) => {
      return [...state, ...action.payload];
    },
    createComment: (state = initialState, action: PayloadAction<IMessage>) => {
      const newComment = {
        ipAddress: process.env.REACT_APP_MY_IP,
        name: action.payload.name,
        surname: action.payload.surname,
        comment: action.payload.comment,
      };
      return [newComment, ...state ]
    },
  },
});


export const { setComments, createComment } = chatSlice.actions;
export default chatSlice.reducer;

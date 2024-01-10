import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IMessage, ICommentStatee } from "./types";

const initialState: ICommentStatee = {
  messages: [],
  errors: "",
  isNewMessage: false,
};
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<IComment[]>) => {
      state.messages = action.payload;
    },
    getCommentsFail: (state, action: PayloadAction<string>) => {
      state.errors = action.payload;
    },
    createComment: (state, action: PayloadAction<IMessage>) => {
      const newComment = {
        name: action.payload.name,
        surname: action.payload.surname,
        comment: action.payload.comment,
        _id: "",
      };

      state.messages = [newComment, ...state.messages];
      state.isNewMessage = true;
    },
    isNotNewMessage: (state, action: PayloadAction<boolean>) => {
      state.isNewMessage = false;
    },

    deleteComment: (state, action: PayloadAction<IComment>) => {
      // console.log(action.payload);
      state.messages = state.messages.filter(
        (el) => el._id !== action.payload._id
      );
    },
  },
});

export const { setComments, createComment, getCommentsFail, deleteComment } =
  chatSlice.actions;
export default chatSlice.reducer;

/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlockedUser, IComment } from "./types";

const initialState: IBlockedUser = {
  values: [],
  isBlocked: false,
};

export const blockedUsersSlice = createSlice({
  name: "blockedUsers",
  initialState,
  reducers: {
    getBlockedUsers: (
      state,
      action: PayloadAction<IComment[]>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.values = action.payload;
    },
   
    
  },
});

export const { getBlockedUsers } =
  blockedUsersSlice.actions;
export default blockedUsersSlice.reducer;

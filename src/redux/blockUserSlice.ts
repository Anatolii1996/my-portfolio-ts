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
      state = initialState,
      action: PayloadAction<IComment[]>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.values = action.payload;
    },
    changeBlockedStatus: (
      state = initialState,
      action: PayloadAction<boolean>
    ) => {
      state.isBlocked = action.payload;
    },
    toBlockUser: (state = initialState, action: PayloadAction<string>) => {
      // state.values = state.values.filter((el) => el._id !== action.payload);
    },
  },
});

export const { getBlockedUsers, changeBlockedStatus, toBlockUser } =
  blockedUsersSlice.actions;
export default blockedUsersSlice.reducer;

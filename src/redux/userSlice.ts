/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, ICurrentUser} from "./types";

const initialState: IUserState = {
  isBlocked: false,
  isOwner: false,
  isNewUser: false,
};

export const usersSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    getOwns: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOwner = action.payload;
    },
    isNewUser: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isNewUser = action.payload;
    },
    changeBlockedStatus: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isBlocked = action.payload;
    }
    
  },
});

export const isCurrentOwner = (state:ICurrentUser) => state.currentUser.isOwner;
export const isNewUserValue = (state:ICurrentUser) => state.currentUser.isNewUser;

export const {  changeBlockedStatus, getOwns, isNewUser } =
usersSlice.actions;


export default usersSlice.reducer;

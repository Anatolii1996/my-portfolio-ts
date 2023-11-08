import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}


export const indexPrevPageSlice = createSlice({
    name: 'indexPrevPage',
    initialState,
    reducers: {
        setPrevPage: (state = initialState, indexPage) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = indexPage.payload
        },


    },
});
export const { setPrevPage } = indexPrevPageSlice.actions;
export default indexPrevPageSlice.reducer;
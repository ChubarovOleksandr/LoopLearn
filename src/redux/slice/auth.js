import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userData: []
};

export const quitzSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      setUserData(state, action) {
         state.userData = action.payload;
      },
   }
})

export const { setUserData } = quitzSlice.actions;
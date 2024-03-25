import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setRegisterData } from "../../api/Auth";

const initialState = {
   userData: {
      email: '',
      username: '',
      password: '',
   }
};

export const registData = createAsyncThunk(
   'authSlice/registData',
   async function (params) {
      const response = await setRegisterData(params);
      return response;
   }
)

export const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      setUserData(state, action) {
         state.userData = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(registData.pending, () => {
         })
         .addCase(registData.fulfilled, (state, action) => {
            state.userData = action.payload;
         })
   }
})

export const { setUserData } = authSlice.actions;
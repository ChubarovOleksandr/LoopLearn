import { createSlice } from '@reduxjs/toolkit';

interface GlobalSlice {
  selectedMode: string;
}

const initialState: GlobalSlice = {
  selectedMode: 'default',
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setSelectedMode(state, action) {
      state.selectedMode = action.payload;
    },
  },
});

export const { setSelectedMode } = globalSlice.actions;

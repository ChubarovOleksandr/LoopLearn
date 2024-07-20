import { configureStore } from '@reduxjs/toolkit';
import { sectionSlice } from './slice/sectionsSlice';
import { quitzSlice } from './slice/quitzSlice';

const store = configureStore({
   reducer: {
      section: sectionSlice.reducer,
      quitz: quitzSlice.reducer,
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { store };
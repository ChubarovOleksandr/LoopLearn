import { configureStore } from '@reduxjs/toolkit';
import { sectionSlice } from './slice/sectionsSlice';
import { quitzSlice } from './slice/quitzSlice';
import { globalSlice } from './slice/globalSlice';

const store = configureStore({
   reducer: {
      global: globalSlice.reducer,
      section: sectionSlice.reducer,
      quitz: quitzSlice.reducer,
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { store };
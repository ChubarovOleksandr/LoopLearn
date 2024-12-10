import { configureStore } from '@reduxjs/toolkit';
import { sectionSlice } from './slice/sectionsSlice';
import { globalSlice } from './slice/globalSlice';
import { quizSlice } from './slice/quizSlice';

const store = configureStore({
   reducer: {
      global: globalSlice.reducer,
      section: sectionSlice.reducer,
      quiz: quizSlice.reducer,
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export { store };
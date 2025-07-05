import { configureStore } from '@reduxjs/toolkit';
import { globalSlice } from './slice/globalSlice';
import { quizSlice } from './slice/quizSlice';
import { sectionSlice } from './slice/sectionsSlice';

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    section: sectionSlice.reducer,
    quiz: quizSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store };

import { configureStore } from '@reduxjs/toolkit';
import { sectionSlice } from './slice/sectionsSlice';

const store = configureStore({
   reducer: {
      section: sectionSlice.reducer,
   }
})

export { store };
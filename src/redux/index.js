import { configureStore } from '@reduxjs/toolkit';
import { sectionSlice } from './slice/sectionsSlice';
import { quitzSlice } from './slice/quitzSlice';

const store = configureStore({
   reducer: {
      section: sectionSlice.reducer,
      quitz: quitzSlice.reducer,
   }
})

export { store };
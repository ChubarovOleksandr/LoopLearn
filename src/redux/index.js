import { configureStore } from '@reduxjs/toolkit';
import { sectionSlice } from './slice/sectionsSlice';
import { quitzSlice } from './slice/quitzSlice';
import { authSlice } from './slice/auth';

const store = configureStore({
   reducer: {
      section: sectionSlice.reducer,
      quitz: quitzSlice.reducer,
      auth: authSlice.reducer,
   }
})

export { store };
import { configureStore } from '@reduxjs/toolkit'
import eventSlice from '../slices/eventSlice';
import userSlice from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    eventState: eventSlice,
    userState: userSlice
  },
});



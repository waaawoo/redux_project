import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//
export const store = configureStore({
  // importしたSliceを記載していく
  reducer: {
    counter: counterReducer,
  },
});

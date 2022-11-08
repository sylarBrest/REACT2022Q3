import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
  },
});

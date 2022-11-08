import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchData } from 'data/types';
import { SearchStateType } from './types';

const initialState: SearchStateType = {
  query: localStorage.getItem('searchBarValue') || '',
  imageType: 'all',
  pagination: {
    perPage: 12,
    page: 1,
  },
  results: {
    hits: [],
    total: 0,
    totalHits: 0,
  },
  isLoading: true,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.pagination.page = 1;
      state.isLoading = true;
    },
    changeImageType: (state, action: PayloadAction<string>) => {
      state.imageType = action.payload;
      state.pagination.page = 1;
      state.isLoading = true;
    },
    changePerPage: (state, action: PayloadAction<number>) => {
      state.pagination.perPage = action.payload;
      state.pagination.page = 1;
      state.isLoading = true;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.pagination.page = action.payload;
      state.isLoading = true;
    },
    saveResults: (state, action: PayloadAction<SearchData>) => {
      state.results = action.payload;
      state.isLoading = false;
    },
  },
});

export const { changeQuery, changeImageType, changePerPage, changePage, saveResults } =
  searchSlice.actions;

export default searchSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchData, UrlParametersType } from 'data/types';
import { SearchStateType } from './types';
import { basicGetMethod } from 'services/basicGetMethod';

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
    },
    changeImageType: (state, action: PayloadAction<string>) => {
      state.imageType = action.payload;
      state.pagination.page = 1;
    },
    changePerPage: (state, action: PayloadAction<number>) => {
      state.pagination.perPage = action.payload;
      state.pagination.page = 1;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.pagination.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<SearchData>) => {
        state.results = action.payload;
        state.isLoading = false;
      });
  },
});

export const { changeQuery, changeImageType, changePerPage, changePage } = searchSlice.actions;

export default searchSlice.reducer;

export const fetchData = createAsyncThunk(
  'search/fetchData',
  async (params: UrlParametersType) => await basicGetMethod(params)
);

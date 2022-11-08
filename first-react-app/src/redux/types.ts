import { SearchData, FormDataArrayType } from 'data/types';
import { store } from './store';

export type PaginationType = {
  perPage: number;
  page: number;
};

export type SearchStateType = {
  query: string;
  imageType: string;
  pagination: PaginationType;
  results: SearchData;
  isLoading: boolean;
};

export type FormStateType = {
  data: FormDataArrayType;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

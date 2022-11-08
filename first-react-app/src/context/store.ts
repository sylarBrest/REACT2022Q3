import { GlobalStateType } from './types';

export const initialStateContext: GlobalStateType = {
  search: {
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
  },
  form: {
    data: [],
  },
};

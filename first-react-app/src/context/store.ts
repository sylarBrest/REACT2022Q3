import { GlobalStateType } from 'data/types';

export const initialState: GlobalStateType = {
  search: {
    query: '',
    imageType: 'all',
    pagination: {
      perPage: 20,
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

import React from 'react';
import { InitialStateType } from '../data/types';

export const initialState: InitialStateType = {
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
  },
  form: {
    data: [],
  },
};

export const GlobalContext = React.createContext<InitialStateType>(initialState);

import React, { useContext, useReducer } from 'react';
import { AppProviderProps, GlobalContextType, InitialStateType } from '../data/types';
import { mainReducer } from './reducers';

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

export const GlobalContext = React.createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null,
});

export const useGlobalContext = () => useContext(GlobalContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

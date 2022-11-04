import { ACTION_TYPE } from 'data/constants';
import React, { useContext, useEffect, useReducer } from 'react';
import { basicGetMethod } from 'services/basicGetMethod';
import { AppProviderProps, GlobalContextType, SearchData } from '../data/types';
import { mainReducer } from './reducers';
import { initialState } from './store';

export const GlobalContext = React.createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null,
});

export const useGlobalContext = () => useContext(GlobalContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchBarValue') || '';
    const fetchData = async (newQuery: string) => {
      const fetchedData: SearchData = await basicGetMethod({ query: newQuery });
      dispatch({ type: ACTION_TYPE.saveSearchResults, payload: fetchedData });
    };
    dispatch({ type: ACTION_TYPE.changeQuery, payload: { query: searchQuery } });
    fetchData(searchQuery);
  }, [dispatch]);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

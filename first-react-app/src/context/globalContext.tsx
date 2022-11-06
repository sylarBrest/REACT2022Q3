import { ACTION_TYPE } from 'data/constants';
import React, { useContext, useEffect, useReducer } from 'react';
import { basicGetMethod } from 'services/basicGetMethod';
import { AppProviderProps, GlobalContextType } from './types';
import { mainReducer } from './reducers';
import { initialState } from './store';
import { SearchData } from 'data/types';

export const GlobalContext = React.createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null,
});

export const useGlobalContext = () => useContext(GlobalContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const {
    query,
    imageType,
    pagination: { page, perPage },
  } = state.search;

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.changeQuery,
      payload: { query, imageType, page, perPage },
    });

    const fetchData = async () => {
      const fetchedData: SearchData = await basicGetMethod({
        query,
        page,
        perPage,
        imageType,
      });
      dispatch({ type: ACTION_TYPE.saveSearchResults, payload: fetchedData });
    };

    fetchData();
  }, [dispatch, query, imageType, page, perPage]);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

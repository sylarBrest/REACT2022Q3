import { Dispatch } from 'react';
import { ACTION_TYPE } from 'data/constants';
import { SearchData, FormDataArrayType, UrlParametersType } from 'data/types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

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

export type GlobalStateType = {
  search: SearchStateType;
  form: FormStateType;
};

type SaveFormDataActionType = {
  type: ACTION_TYPE.saveFormData;
  payload: FormDataArrayType;
};

export type FormActionsType = SaveFormDataActionType;

type ChangeQueryActionType = {
  type: ACTION_TYPE.changeQuery;
  payload: UrlParametersType;
};

type ChangeImageTypeActionType = {
  type: ACTION_TYPE.changeImageType;
  payload: UrlParametersType;
};

type ChangePerPageActionType = {
  type: ACTION_TYPE.changePerPage;
  payload: UrlParametersType;
};

type ChangePageActionType = {
  type: ACTION_TYPE.changePage;
  payload: UrlParametersType;
};

type SaveSearchResultsActionType = {
  type: ACTION_TYPE.saveSearchResults;
  payload: SearchData;
};

export type SearchActionsType =
  | ChangeQueryActionType
  | ChangeImageTypeActionType
  | ChangePerPageActionType
  | ChangePageActionType
  | SaveSearchResultsActionType;

export type ActionsType = SearchActionsType | FormActionsType;

export type GlobalContextType = {
  state: GlobalStateType;
  dispatch: Dispatch<ActionsType>;
};

export type AppProviderProps = { children: React.ReactNode };

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { Dispatch } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { ACTION_TYPE, GENDERS } from './constants';

export type RoutePropsType = {
  path: string;
  name: string;
};

export type SearchBarPropsType = {
  getSearchQuery: (searchQuery: string) => void;
};

export type FormPropsType = {
  updateData: (formData: FormDataPropsType) => void;
};

export type FormDataPropsType = {
  photo: Blob;
  name: string;
  surname: string;
  birthDate: string;
  gender: GENDERS;
  country: string;
  consent: boolean;
};

export type FormDataArrayType = FormDataPropsType[];

export type FormCardItemPropsType = {
  label: string;
  value: string;
};

export type ValidationMessagePropsType = {
  message: string;
};

export type BannerPropsType = {
  name: string;
  isVisible: boolean;
};

export type FormCardsContainerPropsType = {
  formData: FormDataArrayType;
};

export type SearchParametersType = {
  query: string;
  page: number;
  perPage?: number;
  imageType?: string;
};

export type UrlParametersType = Partial<SearchParametersType> & {
  id?: number;
};

export type SearchHitType = {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
};

export type SearchHitsArrayType = SearchHitType[];

export type SearchData = {
  hits: SearchHitsArrayType;
  total: number;
  totalHits: number;
};

export type CardsContainerPropsType = {
  searchQuery: string;
};

export type CardPropsType = SearchHitType & {
  getPhotoId: (id: number) => void;
};

export type ModalPropsType = SearchHitType & {
  onCloseModal: () => void;
};

export type CountItemPropsType = {
  label: string;
  icon: string;
  value: number;
};

export type InputPropsType = {
  label: Path<FormDataPropsType>;
  register: UseFormRegister<FormDataPropsType>;
  error?: string;
};

export type RadioInputPropsType = InputPropsType & {
  gender: string;
};

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
  payload: { query: string };
};

type ChangeImageTypeActionType = {
  type: ACTION_TYPE.changeImageType;
  payload: { imageType: string };
};

type ChangePerPageActionType = {
  type: ACTION_TYPE.changePerPage;
  payload: { perPage: number };
};

type ChangePageActionType = {
  type: ACTION_TYPE.changePage;
  payload: { page: number };
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

export type ImageTypeSwitchPropsType = {
  value: string;
};

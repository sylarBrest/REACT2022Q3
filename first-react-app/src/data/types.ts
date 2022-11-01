import { Path, UseFormRegister } from 'react-hook-form';
import { GENDERS } from './constants';

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
  perPage?: number;
  order?: string;
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

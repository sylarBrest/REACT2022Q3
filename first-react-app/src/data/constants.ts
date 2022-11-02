import { RoutePropsType } from './types';

export const BASE_URL = 'https://pixabay.com/api/';

export const API_KEY = '30792789-287aca7b495248bc1fbb3121b';

export const MAX_FILE_SIZE = 2097152;

export const SELECT_DEFAULT_OPTION = 'Choose country';

export const NAME_REGEX = new RegExp(/^[A-ZА-Я][a-zA-Zа-яА-Я -]{2,}$/);

export const MIN_AGE = 13;

export const COUNTRIES: string[] = [
  'Belarus',
  'Russia',
  'Poland',
  'Kazakhstan',
  'Georgia',
  'Lithuania',
];

export const ROUTE_PATHS: RoutePropsType[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/forms',
    name: 'Forms',
  },
  {
    path: '/about-us',
    name: 'About Us',
  },
];

export enum GENDERS {
  male = 'male',
  female = 'female',
}

export enum ACTION_TYPE {
  saveFormData = 'SAVE_FORM_DATA',
  changeQuery = 'CHANGE_QUERY',
  changeImageType = 'CHANGE_IMAGE_TYPE',
  changePerPage = 'CHANGE_PER_PAGE',
  changePage = 'CHANGE_PAGE',
  saveSearchResults = 'SAVE_SEARCH_RESULTS',
}

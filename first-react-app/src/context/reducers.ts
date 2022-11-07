import { ACTION_TYPE } from 'data/constants';
import { ActionsType, FormStateType, GlobalStateType, SearchStateType } from './types';

export const formReducer = (state: FormStateType, action: ActionsType): FormStateType => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.saveFormData: {
      return { ...state, data: payload };
    }
    default:
      return state;
  }
};

export const searchReducer = (state: SearchStateType, action: ActionsType): SearchStateType => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.changeQuery: {
      return {
        ...state,
        query: payload.query,
        isLoading: true,
        pagination: {
          page: payload.page,
          perPage: payload.perPage,
        },
      };
    }
    case ACTION_TYPE.changeImageType: {
      return {
        ...state,
        imageType: payload.imageType,
        isLoading: true,
        pagination: {
          page: payload.page,
          perPage: payload.perPage,
        },
      };
    }
    case ACTION_TYPE.changePerPage: {
      return {
        ...state,
        isLoading: true,
        pagination: {
          page: payload.page,
          perPage: payload.perPage,
        },
      };
    }
    case ACTION_TYPE.changePage: {
      return {
        ...state,
        isLoading: true,
        pagination: {
          page: payload.page,
          perPage: payload.perPage,
        },
      };
    }
    case ACTION_TYPE.saveSearchResults: {
      return {
        ...state,
        isLoading: false,
        results: payload,
      };
    }
    default:
      return state;
  }
};

export const mainReducer = (
  { search, form }: GlobalStateType,
  action: ActionsType
): GlobalStateType => ({
  search: searchReducer(search, action),
  form: formReducer(form, action),
});

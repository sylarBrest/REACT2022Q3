import { ACTION_TYPE } from 'data/constants';
import { ActionsType, FormStateType, InitialStateType, SearchStateType } from 'data/types';

export const formReducer = (state: FormStateType, action: ActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.saveFormData: {
      const newState = { ...state };
      newState.data = [...payload];
      return newState;
    }
    default:
      return state;
  }
};

export const searchReducer = (state: SearchStateType, action: ActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.changeQuery: {
      const newState = { ...state };
      newState.query = payload.query;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.changeImageType: {
      const newState = { ...state };
      newState.imageType = payload.imageType;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.changePerPage: {
      const newState = { ...state };
      newState.pagination.perPage = payload.perPage;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.changePage: {
      const newState = { ...state };
      newState.pagination.page = payload.page;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.saveSearchResults: {
      const newState = { ...state };
      newState.results = { ...payload };
      newState.isLoading = false;
      return newState;
    }
    default:
      return state;
  }
};

export const mainReducer = (
  { search, form }: InitialStateType,
  action: ActionsType
): InitialStateType => ({
  search: searchReducer(search, action),
  form: formReducer(form, action),
});

import { ACTION_TYPE } from 'data/constants';
import { ActionsType, FormStateType, GlobalStateType, SearchStateType } from 'data/types';

export const formReducer = (state: FormStateType, action: ActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.saveFormData: {
      const newState: FormStateType = { ...state };
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
      const newState: SearchStateType = { ...state };
      newState.query = payload.query;
      newState.pagination.page = payload.page;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.changeImageType: {
      const newState: SearchStateType = { ...state };
      newState.imageType = payload.imageType;
      newState.pagination.page = 1;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.changePerPage: {
      const newState: SearchStateType = { ...state };
      newState.pagination.perPage = payload.perPage;
      newState.pagination.page = 1;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.changePage: {
      const newState: SearchStateType = { ...state };
      newState.pagination.page = payload.page;
      newState.isLoading = true;
      return newState;
    }
    case ACTION_TYPE.saveSearchResults: {
      const newState: SearchStateType = { ...state };
      newState.results = { ...payload };
      newState.isLoading = false;
      return newState;
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

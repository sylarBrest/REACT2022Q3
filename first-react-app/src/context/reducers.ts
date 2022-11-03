import { ACTION_TYPE } from 'data/constants';
import { ActionsType, FormStateType, InitialStateType, SearchStateType } from 'data/types';

export const formReducer = (state: FormStateType, action: ActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.saveFormData: {
      const newState = { ...state };
      newState.data.concat(payload);
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
      return newState;
    }
    case ACTION_TYPE.changeImageType: {
      const newState = { ...state };
      newState.imageType = payload.imageType;
      return newState;
    }
    case ACTION_TYPE.changePerPage: {
      const newState = { ...state };
      newState.pagination.perPage = payload.perPage;
      return newState;
    }
    case ACTION_TYPE.changePage: {
      const newState = { ...state };
      newState.pagination.page = payload.page;
      return newState;
    }
    case ACTION_TYPE.saveSearchResults: {
      const newState = { ...state };
      newState.results = { ...payload };
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

import { ACTION_TYPE } from 'data/constants';
import { FormActions, FormDataArrayType, SearchActions, SearchStateType } from 'data/types';

export const formReducer = (state: FormDataArrayType, action: FormActions) => {
  if (action.type === ACTION_TYPE.saveFormData) {
    return [...state, action.payload];
  }
  return state;
};

export const searchReducer = (state: SearchStateType, action: SearchActions) => {
  switch (action.type) {
    case ACTION_TYPE.changeQuery: {
      const newState = { ...state };
      newState.query = action.payload.query;
      return newState;
    }
    case ACTION_TYPE.changeImageType: {
      const newState = { ...state };
      newState.imageType = action.payload.imageType;
      return newState;
    }
    case ACTION_TYPE.changePerPage: {
      const newState = { ...state };
      newState.pagination.perPage = action.payload.perPage;
      return newState;
    }
    case ACTION_TYPE.changePage: {
      const newState = { ...state };
      newState.pagination.page = action.payload.page;
      return newState;
    }
    case ACTION_TYPE.saveSearchResults: {
      const newState = { ...state };
      newState.results = { ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};

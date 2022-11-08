import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './types';

export const querySelector = createSelector(
  (state: RootState) => state.search,
  (search) => search.query
);

export const imageTypeSelector = createSelector(
  (state: RootState) => state.search,
  (search) => search.imageType
);

export const pageSelector = createSelector(
  (state: RootState) => state.search,
  (search) => search.pagination.page
);

export const perPageSelector = createSelector(
  (state: RootState) => state.search,
  (search) => search.pagination.perPage
);

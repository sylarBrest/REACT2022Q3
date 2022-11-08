import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormDataPropsType } from 'data/types';
import { FormStateType } from './types';

const initialState: FormStateType = {
  data: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<FormDataPropsType>) => {
      state.data.push(action.payload);
    },
  },
});

export const { saveFormData } = formSlice.actions;

export default formSlice.reducer;

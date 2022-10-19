import { FormEvent } from 'react';

export type RoutePropsType = {
  path: string;
  name: string;
};

export type SearchBarPropsType = {
  placeholder: string;
};

export type SearchBarStateType = {
  value: string;
};

export type FormPropsType = {
  onSubmit?: (event: FormEvent) => void;
  onChange?: () => void;
};

export type FormDataPropsType = {
  photo: Blob;
  name: string;
  surname: string;
  birthdate: string;
  gender: string;
  country: string;
  consent: boolean;
};

export type FormDataArrayType = FormDataPropsType[];

export type ValidatedType = {
  photo: boolean;
  name: boolean;
  surname: boolean;
  birthdate: boolean;
  gender: boolean;
  country: boolean;
  consent: boolean;
};

export type FormStateType = {
  isValidated: ValidatedType;
  formData: FormDataArrayType;
  isChanged: boolean;
  isSubmitted: boolean;
  isMessageVisible: boolean;
};

export type RatingPropsType = {
  rating: number;
};

export type VoicesPropsType = {
  voices: number;
};

export type CardPropsType = {
  id: number;
  title: string;
  imageName?: string;
  description: string;
  director: string;
  genres: string[];
  rating?: number;
  voices?: number;
  year: number;
};

export type FormCardItemPropsType = {
  label: string;
  value: string;
};

export type ValidationMessagePropsType = {
  isInvalid: boolean;
  message: string;
};

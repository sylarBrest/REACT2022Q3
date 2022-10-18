import { FormEvent } from 'react';

export type TItemProps = {
  path: string;
  name: string;
};

export type TSearchBarProps = {
  placeholder: string;
};

export type TSearchBarState = {
  value: string;
};

export type TFormProps = {
  onSubmit?: (event: FormEvent) => void;
  onChange?: () => void;
};

export type TFormData = {
  photo: Blob;
  name: string;
  surname: string;
  birthdate: string;
  gender: string;
  country: string;
  consent: boolean;
};

export type TFormDataArray = TFormData[];

export type TValidated = {
  photo: boolean;
  name: boolean;
  surname: boolean;
  birthdate: boolean;
  gender: boolean;
  country: boolean;
  consent: boolean;
};

export type TFormState = {
  isValidated: TValidated;
  formData: TFormDataArray;
  isChanged: boolean;
  isSubmitted: boolean;
  isMessageVisible: boolean;
};

export type TRatingProps = {
  rating: number;
};

export type TVoicesProps = {
  voices: number;
};

export type TCardProps = {
  id: number;
  title: string;
  imagePath?: string;
  description: string;
  director: string;
  genres: string[];
  rating?: number;
  voices?: number;
  year: number;
};

export type FormCardItemProps = {
  label: string;
  value: string;
};

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
  updateData: (formData: FormDataPropsType) => void;
};

export type FormDataPropsType = {
  photo: Blob;
  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  country: string;
  consent: boolean;
};

export type FormDataArrayType = FormDataPropsType[];

export type ValidatedType = {
  photo: boolean;
  name: boolean;
  surname: boolean;
  birthDate: boolean;
  gender: boolean;
  country: boolean;
  consent: boolean;
};

export type FormStateType = {
  isChanged: boolean;
  isSubmitPressed: boolean;
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

export type InputPropsType = {
  name: string;
};

export type ModalPropsType = {
  name: string;
  isVisible: boolean;
};

export type FormCardsContainerPropsType = {
  formData: FormDataArrayType;
};

export type FormWrapperStateType = {
  formData: FormDataArrayType;
};

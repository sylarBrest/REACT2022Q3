export type RoutePropsType = {
  path: string;
  name: string;
};

export type SearchBarPropsType = {
  getSearchData: (searchData: SearchHitsArrayType) => void;
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

export type SearchWrapperStateType = {
  data: SearchHitsArrayType;
};

export type CardsContainerPropsType = {
  searchData: SearchHitsArrayType;
};

export type SearchParametersType = {
  query: string;
  perPage?: number;
  order?: string;
};

export type SearchHitType = {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
};

export type SearchHitsArrayType = SearchHitType[];

export type SearchData = {
  hits: SearchHitsArrayType;
  total: number;
  totalHits: number;
};

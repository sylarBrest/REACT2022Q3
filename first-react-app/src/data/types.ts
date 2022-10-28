export type RoutePropsType = {
  path: string;
  name: string;
};

export type SearchBarPropsType = {
  getSearchQuery: (searchQuery: string) => void;
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
  isBannerVisible: boolean;
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

export type BannerPropsType = {
  name: string;
  isVisible: boolean;
};

export type FormCardsContainerPropsType = {
  formData: FormDataArrayType;
};

export type FormWrapperStateType = FormCardsContainerPropsType;

export type SearchWrapperStateType = {
  searchQuery: string;
  data: SearchData;
  isLoading: boolean;
  isEmptyData: boolean;
};

export type SearchParametersType = {
  query: string;
  perPage?: number;
  order?: string;
};

export type UrlParametersType = Partial<SearchParametersType> & {
  id?: number;
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

export type CardsContainerPropsType = {
  searchQuery: string;
  data: SearchData;
};

export type CardsContainerStateType = {
  isModalVisible: boolean;
};

export type CardPropsType = SearchHitType & {
  getPhotoId: (id: number) => void;
};

export type ModalPropsType = SearchHitType & {
  onCloseModal: () => void;
};

export type ModalItemPropsType = {
  label: string;
  icon: string;
  value: number;
};

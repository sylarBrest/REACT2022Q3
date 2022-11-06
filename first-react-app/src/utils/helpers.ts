import { API_KEY, BASE_URL } from 'data/constants';
import { UrlParametersType } from 'data/types';

export const getRequestUrl = ({ query, page, perPage, imageType }: UrlParametersType) => {
  return `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=${imageType}&per_page=${perPage}&page=${page}`;
};

export const convertToMbytes = (bites: number) => bites / 1024 / 1024;

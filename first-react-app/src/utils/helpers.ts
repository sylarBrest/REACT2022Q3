import { API_KEY, BASE_URL } from 'data/constants';
import { UrlParametersType } from 'data/types';

export const getRequestUrl = (urlParams: UrlParametersType) => {
  const query = `&q=${encodeURIComponent(urlParams.query)}`;
  const page = `&page=${urlParams.page}`;
  const perPage = `&per_page=${urlParams.perPage}`;
  const imageType = `&image_type=${urlParams.imageType}`;

  return `${BASE_URL}?key=${API_KEY}${query}${imageType}${perPage}${page}`;
};

export const convertToMbytes = (bites: number) => bites / 1024 / 1024;

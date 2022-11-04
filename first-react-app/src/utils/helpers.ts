import { API_KEY, BASE_URL } from 'data/constants';
import { UrlParametersType } from 'data/types';

export const getRequestUrl = (urlParams: UrlParametersType) => {
  const query = urlParams.query ? `&q=${encodeURIComponent(urlParams.query)}` : '';
  const perPage = urlParams.perPage ? `&per_page=${urlParams.perPage}` : '';
  const imageType = urlParams.imageType ? `&image_type=${urlParams.imageType}` : '';
  const id = urlParams.id ? `&id=${urlParams.id}` : '';

  return `${BASE_URL}?key=${API_KEY}${query}${perPage}${imageType}${id}`;
};

export const convertToMbytes = (bites: number) => bites / 1024 / 1024;

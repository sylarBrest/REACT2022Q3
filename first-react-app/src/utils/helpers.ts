import { API_KEY, BASE_URL } from 'data/constants';
import { UrlParametersType } from 'data/types';

export const getRequestUrl = (urlParams: UrlParametersType) => {
  const query = urlParams.query ? `&q=${encodeURIComponent(urlParams.query)}` : '';
  const perPage = urlParams.perPage ? `&per_page=${urlParams.perPage}` : '';
  const order = urlParams.order ? `&order=${urlParams.order}` : '';
  const id = urlParams.id ? `&id=${urlParams.id}` : '';

  return `${BASE_URL}?key=${API_KEY}${query}${perPage}${order}${id}`;
};

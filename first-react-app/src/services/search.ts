import { API_KEY, BASE_URL } from 'data/constants';
import { SearchData, SearchParametersType } from 'data/types';

const search = async (parameters: SearchParametersType) => {
  const perPage = `&per_page=${parameters.perPage}` || '';
  const order = `&order=${parameters.order}` || '';
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${parameters.query}${perPage}${order}`
  );
  const data: SearchData = await response.json();
  return data;
};

export default search;

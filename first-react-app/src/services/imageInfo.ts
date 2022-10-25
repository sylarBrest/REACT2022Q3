import { API_KEY, BASE_URL } from 'data/constants';
import { SearchData } from 'data/types';

const getImageDataFromId = async (id: number) => {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&id=${id}`);
  const data: SearchData = await response.json();
  return data;
};

export default getImageDataFromId;

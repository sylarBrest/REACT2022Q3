import { UrlParametersType } from 'data/types';
import { getRequestUrl } from 'utils';

export const basicGetMethod = async (parameters: UrlParametersType) => {
  try {
    return await fetch(getRequestUrl(parameters)).then((response) => response.json());
  } catch (err) {
    throw new Error(`Something went wrong: ${err}`);
  }
};

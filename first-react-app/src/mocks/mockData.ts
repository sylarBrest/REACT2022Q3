import { SearchData } from 'data/types';

export const localStorageMock = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

export const goodSearch = 'ferrari';
export const badSearch = 'tralala';

export const mockEmptyData = {
  hits: [],
  total: 0,
  totalHits: 0,
};

export const mockData: SearchData = {
  hits: [
    {
      collections: 123,
      comments: 2,
      downloads: 1000,
      id: 123456,
      imageHeight: 500,
      imageSize: 3456737,
      imageWidth: 1000,
      largeImageURL: 'path/to/large/image',
      likes: 300,
      pageURL: 'path/to/page/with/image',
      previewHeight: 40,
      previewURL: 'path/to/preview',
      previewWidth: 80,
      tags: 'cars, test',
      type: 'image',
      user: 'sylarBrest',
      userImageURL: 'path/to/user/avatar',
      user_id: 98765,
      views: 2022,
      webformatHeight: 320,
      webformatURL: 'path/to/webformat/image',
      webformatWidth: 640,
    },
  ],
  total: 100,
  totalHits: 20,
};

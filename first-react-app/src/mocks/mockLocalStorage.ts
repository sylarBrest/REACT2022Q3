import { goodSearch } from './mockData';

export const mockLocalStorage = (function () {
  let store: { [key: string]: string } = { searchBarValue: goodSearch };

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

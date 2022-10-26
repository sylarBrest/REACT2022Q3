import { fireEvent, render, screen } from '@testing-library/react';
import SearchWrapper from '../SearchWrapper';

describe('SearchBar component', () => {
  let inputSearch: HTMLInputElement;
  const testValue = 'test';

  beforeEach(() => {
    render(<SearchWrapper />);
    inputSearch = screen.getByTestId('search-bar');
  });

  it('should render onto the screen', () => {
    expect(inputSearch).toBeInTheDocument();
  });

  it('should change value when typing', () => {
    expect(inputSearch.value).toBe('');
    fireEvent.change(inputSearch, { target: { value: testValue } });
    expect(inputSearch.value).toBe(testValue);
  });

  it('should save value to LocalStorage when unmounting', () => {
    window.localStorage.setItem('searchBarValue', inputSearch.value);
    expect(window.localStorage.getItem('searchBarValue')).toBe(testValue);
  });

  it('should take value from LocalStorage when rendering', () => {
    inputSearch.value = window.localStorage.getItem('searchBarValue') || '';
    expect(inputSearch.value).toBe(testValue);
  });
});

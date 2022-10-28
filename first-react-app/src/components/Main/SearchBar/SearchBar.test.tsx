import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchWrapper } from '../SearchWrapper';

describe('SearchBar component', () => {
  let searchBar: HTMLInputElement;
  const testSearch = 'test';

  beforeEach(() => {
    act(() => {
      render(<SearchWrapper />);
    });
    searchBar = screen.getByTestId('search-bar');
  });

  it('should render onto the screen', () => {
    expect(searchBar).toBeInTheDocument();
  });

  it('should change value when typing', () => {
    expect(searchBar).toHaveValue('');
    act(() => {
      userEvent.type(searchBar, testSearch);
    });
    expect(searchBar).toHaveValue(testSearch);
  });

  it('should save value after pressing Enter', () => {
    act(() => {
      userEvent.type(searchBar, '{enter}');
    });
    expect(searchBar).toHaveValue(testSearch);
  });

  it('should save value to LocalStorage when unmounting', () => {
    expect(window.localStorage.getItem('searchBarValue')).toBe(testSearch);
  });

  it('should take value from LocalStorage when rendering', () => {
    expect(searchBar).toHaveValue(testSearch);
  });
});

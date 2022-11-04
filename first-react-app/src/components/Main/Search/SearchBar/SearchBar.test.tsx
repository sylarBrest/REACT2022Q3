import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchWrapper } from '../SearchWrapper';

describe('SearchBar component', () => {
  let searchBar: HTMLInputElement;
  const testSearch = 'test';

  beforeEach(() => {
    render(<SearchWrapper />);
    searchBar = screen.getByTestId('search-bar-input');
  });

  it('should render onto the screen', () => {
    expect(searchBar).toBeInTheDocument();
  });

  it('should change value when typing', () => {
    expect(searchBar).toHaveValue('');
    userEvent.type(searchBar, testSearch);
    expect(searchBar).toHaveValue(testSearch);
  });

  it('should save value after pressing Enter', () => {
    userEvent.type(searchBar, '{enter}');
    expect(searchBar).toHaveValue(testSearch);
  });

  it('should save value after clicking on button', () => {
    userEvent.click(screen.getByTestId('search-bar-button'));
    expect(searchBar).toHaveValue(testSearch);
  });

  it('should save value to LocalStorage when unmounting', () => {
    expect(window.localStorage.getItem('searchBarValue')).toBe(testSearch);
  });

  it('should take value from LocalStorage when rendering', () => {
    expect(searchBar).toHaveValue(testSearch);
  });
});

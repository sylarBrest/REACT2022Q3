import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { goodSearch } from 'mocks/mockData';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { SearchWrapper } from '../SearchWrapper';

describe('SearchBar component', () => {
  let searchBar: HTMLInputElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchWrapper />
      </Provider>
    );
    searchBar = screen.getByTestId('search-bar-input');
  });

  it('should render onto the screen', () => {
    expect(searchBar).toBeInTheDocument();
  });

  it('should change value when typing', () => {
    expect(searchBar).toHaveValue(goodSearch);
    userEvent.type(searchBar, '{enter}');
    expect(searchBar).toHaveValue(goodSearch);
  });

  it('should save value after pressing Enter', () => {
    userEvent.type(searchBar, '{enter}');
    expect(searchBar).toHaveValue(goodSearch);
  });

  it('should save value after clicking on button', () => {
    userEvent.click(screen.getByTestId('search-bar-button'));
    expect(searchBar).toHaveValue(goodSearch);
  });

  it('should save value to LocalStorage when unmounting', () => {
    expect(window.localStorage.getItem('searchBarValue')).toBe(goodSearch);
  });

  it('should take value from LocalStorage when rendering', () => {
    expect(searchBar).toHaveValue(goodSearch);
  });
});

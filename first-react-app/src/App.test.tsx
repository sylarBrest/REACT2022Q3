import { fireEvent, render, screen } from '@testing-library/react';
import Card from 'components/Main/Cards/Card';
import Cards from 'components/Main/Cards/Cards';
import SearchBar from 'components/Main/SearchBar';

describe('SearchBar component', () => {
  let inputSearch: HTMLInputElement;
  const testValue = 'test';

  beforeEach(() => {
    render(<SearchBar placeholder="Search..." />);
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

describe('Card component', () => {
  it('should render onto the screen', () => {
    render(
      <Card
        id={0}
        title={'test'}
        imagePath={''}
        description={'lorem ipsum'}
        director={'M. Test'}
        genres={['test', 'true']}
        rating={8}
        voices={12000}
        year={2022}
      />
    );
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});

describe('Cards component', () => {
  it('should render onto the screen', () => {
    render(<Cards />);
    expect(screen.getByTestId('cards-container')).toBeInTheDocument();
  });
});

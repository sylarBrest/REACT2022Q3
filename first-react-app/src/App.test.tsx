import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import Card from 'components/Main/Cards/Card';
import Cards from 'components/Main/Cards/Cards';
import SearchBar from 'components/Main/SearchBar';
import { MemoryRouter } from 'react-router-dom';

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

describe('React Router', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('should route to the "Home" page', () => {
    const homeLink = screen.getByTestId('home-link');
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('should route to the "Forms" page', () => {
    const formsLink = screen.getByTestId('forms-link');
    userEvent.click(formsLink);
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });

  it('should route to the "About Us" page', () => {
    const aboutUsLink = screen.getByTestId('about-us-link');
    userEvent.click(aboutUsLink);
    expect(screen.getByTestId('about-us-page')).toBeInTheDocument();
  });

  it('should route to the "Not Found" page if path not exist', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});

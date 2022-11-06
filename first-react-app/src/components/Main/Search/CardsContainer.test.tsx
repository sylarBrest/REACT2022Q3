import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { badSearch, goodSearch } from 'mocks/mockData';
import { MemoryRouter } from 'react-router-dom';

describe('SearchWrapper component', () => {
  let searchBar: HTMLInputElement;
  let card: HTMLDivElement;

  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    searchBar = screen.getByTestId('search-bar-input');
  });

  const typeSearch = (search: string) => {
    userEvent.type(searchBar, `${search}{enter}`);
    expect(searchBar).toHaveValue(search);
  };

  const openImageInfoPage = async () => {
    const imageLink = await screen.findByTestId('card-link');
    await waitFor(() => {
      userEvent.click(imageLink);
    });
  };

  it('should render "Loading..." while fetching data', () => {
    expect(searchBar).toHaveValue(goodSearch);
    userEvent.type(searchBar, '{enter}');
    expect(screen.getByTestId('loading-stub')).toBeInTheDocument();
  });

  it('should render card(s) if data came back from api', async () => {
    expect(searchBar).toHaveValue(goodSearch);
    card = await screen.findByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('should open dynamic "Image info" page by click on card', async () => {
    await openImageInfoPage();
    expect(await screen.findByTestId('image-info')).toBeInTheDocument();
  });

  it('should render "No results found" if no data came back from api', async () => {
    searchBar.value = '';
    typeSearch(badSearch);
    expect(await screen.findByTestId('no-results-stub')).toBeInTheDocument();
  });
});

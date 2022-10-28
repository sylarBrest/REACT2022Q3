import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { badSearch, goodSearch, mockData } from 'mocks/mockData';
import { SearchWrapper } from './SearchWrapper';

describe('SearchWrapper component', () => {
  let searchBar: HTMLInputElement;
  let card: HTMLDivElement;

  beforeEach(() => {
    render(<SearchWrapper />);
    searchBar = screen.getByTestId('search-bar');
  });

  const typeSearch = (search: string) => {
    userEvent.type(searchBar, `${search}{enter}`);
    expect(searchBar).toHaveValue(search);
  };

  const openModal = async () => {
    card = await screen.findByTestId(`card-${mockData.hits[0].id}`);
    userEvent.click(card);
  };

  it('should render "Loading..." while fetching data', () => {
    typeSearch(goodSearch);
    expect(screen.getByTestId('loading-stub')).toBeInTheDocument();
  });

  it('should render card(s) if data came back from api', async () => {
    card = await screen.findByTestId(`card-${mockData.hits[0].id}`);
    expect(card).toBeInTheDocument();
  });

  it('should render modal window by click on card', async () => {
    await openModal();
    expect(await screen.findByTestId(`modal-${mockData.hits[0].id}`)).toBeInTheDocument();
  });

  it('should close modal window by click on button X', async () => {
    await openModal();
    const modalCloseButton = await screen.findByTestId('modal-close');
    userEvent.click(modalCloseButton);
    expect(screen.queryByTestId(`modal-${mockData.hits[0].id}`)).toBeNull();
  });

  it('should close modal window by click on overlay', async () => {
    await openModal();
    const modalOverlay = await screen.findByTestId('modal-overlay');
    userEvent.click(modalOverlay);
    expect(screen.queryByTestId(`modal-${mockData.hits[0].id}`)).toBeNull();
  });

  it('should render "No results found" if no data came back from api', async () => {
    searchBar.value = '';
    typeSearch(badSearch);
    expect(await screen.findByTestId('no-results-stub')).toBeInTheDocument();
  });
});

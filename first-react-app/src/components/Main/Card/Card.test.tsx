import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockData } from 'mocks/mockData';
import SearchWrapper from '../SearchWrapper';

describe('SearchWrapper component', () => {
  it('should render onto the screen api call was successful', async () => {
    render(<SearchWrapper />);
    const searchInput = screen.getByTestId('search-bar') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'ferrari');
    expect(searchInput).toHaveValue('ferrari');
    fireEvent.keyPress(searchInput, { key: 'Enter', charCode: 13 });
    expect(searchInput).toHaveValue('');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByTestId(`card-${mockData.hits[0].id}`)).toBeInTheDocument();
  });
});

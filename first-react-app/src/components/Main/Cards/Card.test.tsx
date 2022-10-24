import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from 'components/Main/Cards/Card';
import SearchWrapper from '../SearchWrapper';

describe('Card component', () => {
  it('should render onto the screen if rating and voices present', async () => {
    act(() => {
      render(<SearchWrapper />);
    });
    const searchInput = screen.getByTestId('search-bar') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'ferrari');
    expect(searchInput).toHaveValue('ferrari');
    act(() => {
      fireEvent.keyPress(searchInput, { key: 'Enter', charCode: 13 });
    });
    expect(searchInput).toHaveValue('');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByTestId(`card-123456`)).toBeInTheDocument();
  });

  /*   it('should render onto the screen if rating and voices not present', () => {
    render(<Card {...mockMovieData[1]} />);
    expect(screen.getByTestId(`card-${mockMovieData[1].id}`)).toBeInTheDocument();
  }); */
});

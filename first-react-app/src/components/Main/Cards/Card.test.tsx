import { render, screen } from '@testing-library/react';
import Card from 'components/Main/Cards/Card';

describe('Card component', () => {
  const mockMovieData = [
    {
      id: 0,
      title: 'test',
      imageName: '',
      description: 'test with rating and voices',
      director: 'M. Test',
      genres: ['test', 'true'],
      rating: 8,
      voices: 12000,
      year: 2022,
    },
    {
      id: 1,
      title: 'testing',
      imageName: '',
      description: 'test without rating and voices',
      director: 'M. Testing',
      genres: ['test', 'false'],
      year: 2022,
    },
  ];

  it('should render onto the screen if rating and voices present', () => {
    render(<Card {...mockMovieData[0]} />);
    expect(screen.getByTestId(`card-${mockMovieData[0].id}`)).toBeInTheDocument();
  });

  it('should render onto the screen if rating and voices not present', () => {
    render(<Card {...mockMovieData[1]} />);
    expect(screen.getByTestId(`card-${mockMovieData[1].id}`)).toBeInTheDocument();
  });
});

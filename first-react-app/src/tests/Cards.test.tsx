import { render, screen } from '@testing-library/react';
import Card from 'components/Main/Cards/Card';
import Cards from 'components/Main/Cards/Cards';

describe('Cards component', () => {
  it('should render onto the screen', () => {
    render(<Cards />);
    expect(screen.getByTestId('cards-container')).toBeInTheDocument();
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

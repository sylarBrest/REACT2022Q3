import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('component Form', () => {
  it('should render', () => {
    render(<Form />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});

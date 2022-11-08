import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'redux/store';

describe('React Router', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
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
      <Provider store={store}>
        <MemoryRouter initialEntries={['/test']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});

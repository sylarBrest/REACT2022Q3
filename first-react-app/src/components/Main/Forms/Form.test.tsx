import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { FormWrapper } from './FormWrapper';

describe('component Form', () => {
  let submit: HTMLInputElement,
    photo: HTMLInputElement,
    name: HTMLInputElement,
    surname: HTMLInputElement,
    birthDate: HTMLInputElement,
    genderMale: HTMLInputElement,
    country: HTMLSelectElement,
    consent: HTMLInputElement;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <FormWrapper />
      </Provider>
    );
  });

  const fillAllFields = () => {
    URL.createObjectURL = jest.fn();

    const mockPhoto = new File(['hello'], 'hello.png', { type: 'image/png' });

    submit = screen.getByTestId('form-input-submit');
    photo = screen.getByTestId('form-input-photo') as HTMLInputElement;
    name = screen.getByTestId('form-input-name') as HTMLInputElement;
    surname = screen.getByTestId('form-input-surname') as HTMLInputElement;
    birthDate = screen.getByTestId('form-input-birthdate') as HTMLInputElement;
    genderMale = screen.getByTestId('form-input-gender-male') as HTMLInputElement;
    country = screen.getByTestId('form-select-country') as HTMLSelectElement;
    consent = screen.getByTestId('form-input-consent') as HTMLInputElement;

    userEvent.upload(photo, mockPhoto);
    Object.defineProperty(photo, 'value', {
      value: mockPhoto,
    });
    userEvent.type(name, 'Alex');
    userEvent.type(surname, 'Ostrovsky');
    userEvent.type(birthDate, '1987-10-03');
    userEvent.click(genderMale);
    userEvent.selectOptions(country, 'Belarus');
    userEvent.click(consent);
    userEvent.click(submit);
  };

  it('should render onto screen', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('should render disabled submit button by default', () => {
    submit = screen.getByTestId('form-input-submit');
    expect(submit).toBeDisabled();
  });

  it('should render enabled submit button if some field was changed', () => {
    name = screen.getByTestId('form-input-name');
    submit = screen.getByTestId('form-input-submit');
    userEvent.type(name, 'Alex');
    expect(name).toHaveValue('Alex');
    expect(submit).toBeEnabled();
  });

  it('should disabled submit button if submit not success', async () => {
    name = screen.getByTestId('form-input-name');
    submit = screen.getByTestId('form-input-submit');
    userEvent.type(name, 'Alex');
    userEvent.clear(name);
    expect(name).toHaveValue('');
    userEvent.click(submit);
    await waitFor(() => {
      expect(screen.getByText(/Type your name/)).toBeInTheDocument();
      expect(submit).toBeDisabled();
    });
  });

  it('should disabled submit button if submit success', async () => {
    fillAllFields();

    await waitFor(() => {
      expect(submit).toBeDisabled();
    });
  });

  it('should display one card after successful submit', () => {
    const card = screen.getByTestId('form-card-data');
    expect(card).toBeInTheDocument();
  });

  it('should hide banner with 5 seconds after succesful submit', () => {
    fillAllFields();
    jest.useFakeTimers();

    const banner = screen.getByTestId('banner');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(banner).not.toBeVisible();
  });
});

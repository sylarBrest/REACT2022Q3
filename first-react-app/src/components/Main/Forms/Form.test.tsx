import { act, fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('component Form', () => {
  beforeEach(() => {
    render(<Form />);
  });

  const fillAllFields = () => {
    URL.createObjectURL = jest.fn();

    const mockPhoto = new File(['hello'], 'hello.png', { type: 'image/png' });

    const submit = screen.getByTestId('form-input-submit');
    const photo = screen.getByTestId('form-input-photo') as HTMLInputElement;
    const name = screen.getByTestId('form-input-name') as HTMLInputElement;
    const surname = screen.getByTestId('form-input-surname') as HTMLInputElement;
    const birthdate = screen.getByTestId('form-input-birthdate') as HTMLInputElement;
    const genderMale = screen.getByTestId('form-input-gender-male') as HTMLInputElement;
    const country = screen.getByTestId('form-select-country') as HTMLSelectElement;
    const consent = screen.getByTestId('form-input-consent') as HTMLInputElement;

    fireEvent.change(photo, { target: { files: [mockPhoto] } });
    fireEvent.change(name, { target: { value: 'Alex' } });
    fireEvent.change(surname, { target: { value: 'Ostrovsky' } });
    fireEvent.change(birthdate, { target: { value: '1987-10-03' } });
    fireEvent.click(genderMale);
    fireEvent.select(country, { target: { value: 'Belarus' } });
    fireEvent.click(consent);
    fireEvent.click(submit);
  };

  it('should render', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('submit button should be disabled when render', () => {
    const submit = screen.getByTestId('form-input-submit');
    expect(submit).toBeDisabled();
  });

  it('submit button should be enabled when changing some input', () => {
    const submit = screen.getByTestId('form-input-submit');
    const name = screen.getByTestId('form-input-name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Alex' } });
    expect(submit).toBeEnabled();
  });

  it('submit button should be disabled after submit with all non-valid fields', () => {
    const submit = screen.getByTestId('form-input-submit');
    const name = screen.getByTestId('form-input-name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Alex' } });
    fireEvent.change(name, { target: { value: '' } });
    fireEvent.click(submit);
    expect(submit).toBeDisabled();
  });

  it('submit button should be disabled after submit with all valid fields', () => {
    fillAllFields();

    const submit = screen.getByTestId('form-input-submit');
    expect(submit).toBeDisabled();
  });

  it('one card should be displayed after succesful submit', () => {
    fillAllFields();

    const card = screen.getByTestId('form-card-data');
    expect(card).toBeInTheDocument();
  });

  it('modal window should hide with 5 seconds after succesful submit', () => {
    jest.useFakeTimers();
    fillAllFields();

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const modal = screen.getByTestId('modal');
    expect(modal).not.toBeVisible();
  });
});

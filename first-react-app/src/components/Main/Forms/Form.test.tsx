import { act, fireEvent, render, screen } from '@testing-library/react';
import FormWrapper from './FormWrapper';

describe('component Form', () => {
  beforeEach(() => {
    render(<FormWrapper />);
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

  it('should render onto screen', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('should render disabled submit button by default', () => {
    const submit = screen.getByTestId('form-input-submit');
    expect(submit).toBeDisabled();
  });

  it('should render enabled submit button if some field was changed', () => {
    const submit = screen.getByTestId('form-input-submit');
    const name = screen.getByTestId('form-input-name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Alex' } });
    expect(submit).toBeEnabled();
  });

  it('should disabled submit button if submit not success', () => {
    const submit = screen.getByTestId('form-input-submit');
    const name = screen.getByTestId('form-input-name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Alex' } });
    fireEvent.change(name, { target: { value: '' } });
    fireEvent.click(submit);
    expect(submit).toBeDisabled();
  });

  it('should disabled submit button if submit success', () => {
    fillAllFields();

    const submit = screen.getByTestId('form-input-submit');
    expect(submit).toBeDisabled();
  });

  it('should display one card after successful submit', () => {
    fillAllFields();

    const card = screen.getByTestId('form-card-data');
    expect(card).toBeInTheDocument();
  });

  it('should hide banner with 5 seconds after succesful submit', () => {
    jest.useFakeTimers();
    fillAllFields();

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const banner = screen.getByTestId('banner');
    expect(banner).not.toBeVisible();
  });
});

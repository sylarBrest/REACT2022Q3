import { TValidated } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidForm, isValidName } from './validation';

describe('Function', () => {
  it('isValidBirthDate should return true if correct date is present', () => {
    expect(isValidBirthDate('2008-10-03')).toBeTruthy();
  });

  it('isValidCountry should return true if correct date is present', () => {
    expect(isValidCountry('Belarus')).toBeTruthy();
  });

  it('isValidForm should return true if correct date is present', () => {
    const mockValidationObject: TValidated = {
      photo: true,
      name: true,
      surname: true,
      birthdate: true,
      gender: true,
      country: true,
      consent: true,
    };

    expect(isValidForm(mockValidationObject)).toBeTruthy();
  });

  it('isValidName should return true if correct date is present', () => {
    expect(isValidName('Alexandr')).toBeTruthy();
  });
});

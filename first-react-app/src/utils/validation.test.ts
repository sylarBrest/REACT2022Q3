import { ValidatedType } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidForm, isValidName } from './validation';

describe('Function', () => {
  it('isValidBirthDate should return true if correct date passed', () => {
    expect(isValidBirthDate('2008-10-03')).toBeTruthy();
  });

  it('isValidCountry should return true if correct country passed', () => {
    expect(isValidCountry('Belarus')).toBeTruthy();
  });

  it('isValidForm should return true if all fields are valid', () => {
    const mockValidationObject: ValidatedType = {
      photo: true,
      name: true,
      surname: true,
      birthDate: true,
      gender: true,
      country: true,
      consent: true,
    };

    expect(isValidForm(mockValidationObject)).toBeTruthy();
  });

  it('isValidName should return true if correct name passed', () => {
    expect(isValidName('Alexandr')).toBeTruthy();
  });
});

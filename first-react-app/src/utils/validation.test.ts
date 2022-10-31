import { isValidBirthDate, isValidCountry, isValidName } from './validation';

describe('Function', () => {
  it('isValidBirthDate should return true if correct date passed', () => {
    expect(isValidBirthDate('2008-10-03')).toBeTruthy();
  });

  it('isValidCountry should return true if correct country passed', () => {
    expect(isValidCountry('Belarus')).toBeTruthy();
  });

  it('isValidName should return true if correct name passed', () => {
    expect(isValidName('Alexandr')).toBeTruthy();
  });
});

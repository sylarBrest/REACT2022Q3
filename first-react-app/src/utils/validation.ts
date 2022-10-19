import { MIN_AGE, NAME_REGEX, SELECT_DEFAULT_OPTION } from 'data/constants';
import { ValidatedType } from 'data/types';

export const isValidBirthDate = (date: string) => {
  const today = new Date();
  const birthday = new Date(date);

  if (today.getFullYear() - birthday.getFullYear() > MIN_AGE) {
    return true;
  } else if (today.getFullYear() - birthday.getFullYear() === MIN_AGE) {
    if (today.getMonth() > birthday.getMonth()) {
      return true;
    } else if (today.getMonth() === birthday.getMonth()) {
      if (today.getDate() >= birthday.getDate()) {
        return true;
      }
    }
  }

  return false;
};

export const isValidCountry = (country: string) => country !== SELECT_DEFAULT_OPTION;

export const isValidForm = (isValidated: ValidatedType): boolean => {
  return Object.values(isValidated).every((flag: boolean) => !!flag);
};

export const isValidName = (name: string) => NAME_REGEX.test(name);

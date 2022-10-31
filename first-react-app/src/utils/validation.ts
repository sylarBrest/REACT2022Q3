import { MIN_AGE, NAME_REGEX, SELECT_DEFAULT_OPTION } from 'data/constants';
import { FormDataPropsType } from 'data/types';
import { FieldErrorsImpl } from 'react-hook-form';

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

export const isValidForm = (errors: Partial<FieldErrorsImpl<FormDataPropsType>>): boolean => {
  return Object.keys(errors).length > 0;
};

export const isValidName = (name: string) => NAME_REGEX.test(name);

export const isFirstLetterCapital = (name: string) => new RegExp(/^[A-ZА-Я]/).test(name);

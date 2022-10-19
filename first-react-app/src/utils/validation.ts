import { MIN_AGE, NAME_REGEX, SELECT_DEFAULT_OPTION } from 'data/constants';
import { ValidatedType } from 'data/types';

export const isValidBirthDate = (date: string) => {
  const today = new Date();
  const birthday = new Date(date);
  const birthdayD = (birthday.getFullYear() * 12 + birthday.getMonth()) * 31 + birthday.getDate();
  const todayD = (today.getFullYear() * 12 + today.getMonth()) * 31 + today.getDate();
  return (todayD - birthdayD + 1) / 31 / 12 > MIN_AGE;
};

export const isValidCountry = (country: string) => country !== SELECT_DEFAULT_OPTION;

export const isValidForm = (isValidated: ValidatedType): boolean => {
  return Object.values(isValidated).every((flag: boolean) => !!flag);
};

export const isValidName = (name: string) => NAME_REGEX.test(name);

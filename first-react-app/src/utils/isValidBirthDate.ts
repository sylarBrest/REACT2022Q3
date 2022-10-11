import { MIN_AGE } from 'data/constants';

export default (date: string) => {
  const today = new Date();
  const birthday = new Date(date);
  const birthdayD = (birthday.getFullYear() * 12 + birthday.getMonth()) * 31 + birthday.getDate();
  const todayD = (today.getFullYear() * 12 + today.getMonth()) * 31 + today.getDate();
  return (todayD - birthdayD + 1) / 31 / 12 > MIN_AGE;
};

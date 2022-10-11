import { NAME_REGEX } from 'data/constants';

export default (name: string) => NAME_REGEX.test(name);

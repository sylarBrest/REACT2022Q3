import { InputPropsType } from 'data/types';
import { isFirstLetterCapital, isValidName } from 'utils';
import { ValidationMessage } from '../ValidationMessage';

export const TextInput = (props: InputPropsType) => {
  const { label, register, error } = props;
  const nameF = label[0].toUpperCase() + label.slice(1);

  return (
    <div className={`personal-data-input input-${label}`}>
      <label className="field-label" htmlFor={label}>
        {nameF}:
      </label>
      <input
        className="field"
        id={label}
        type="text"
        placeholder={nameF}
        {...register(label, {
          required: { value: true, message: `Type your ${label}` },
          minLength: { value: 3, message: `Too short ${label}, at least 3 char long` },
          validate: {
            firstLetterCapital: (v) =>
              isFirstLetterCapital(v as string) || `${nameF} must begin with a capital letter`,
            wrongCharacters: (v) =>
              isValidName(v as string) || `${nameF} can only contain letters, " " and "-"`,
          },
        })}
        data-testid={`form-input-${label}`}
      />
      {error && <ValidationMessage message={error} />}
    </div>
  );
};

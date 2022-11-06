import { RadioInputPropsType } from 'data/types';

export const RadioInput = ({ label, register, gender }: RadioInputPropsType) => {
  const nameF = gender[0].toUpperCase() + gender.slice(1);

  return (
    <div className={`${label}-choice-item item-${gender}`}>
      <input
        className={`field ${label}-field`}
        id={gender}
        type="radio"
        value={gender}
        data-testid={`form-input-${label}-${gender}`}
        {...register(label, { required: { value: true, message: `Choose your ${label}` } })}
      />
      <label className={`${label}-label`} htmlFor={gender}>
        {nameF}
      </label>
    </div>
  );
};

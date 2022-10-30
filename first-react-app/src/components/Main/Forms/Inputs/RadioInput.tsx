import React from 'react';
import { FormDataPropsType } from 'data/types';
import { UseFormRegister } from 'react-hook-form';

export const RadioInput = React.forwardRef<
  HTMLInputElement,
  { gender: string } & ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { gender, name, onChange } = props;
  const nameF = gender[0].toUpperCase() + gender.slice(1);

  return (
    <div className={`gender-choice-item item-${gender}`}>
      <input
        className="field gender-field"
        id={gender}
        type="radio"
        name={name}
        value={gender}
        ref={ref}
        onChange={onChange}
        data-testid={`form-input-gender-${gender}`}
      />
      <label className="gender-label" htmlFor={gender}>
        {nameF}
      </label>
    </div>
  );
});

import React from 'react';
import { FormDataPropsType } from 'data/types';
import { UseFormRegister } from 'react-hook-form';

export const TextInput = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { name, onChange } = props;
  const nameF = name[0].toUpperCase() + name.slice(1);

  return (
    <div className={`personal-data-input input-${name}`}>
      <label className="field-label" htmlFor={name}>
        {nameF}:
      </label>
      <input
        className="field"
        id={name}
        type="text"
        name={name}
        placeholder={nameF}
        ref={ref}
        onChange={onChange}
        data-testid={`form-input-${name}`}
      />
    </div>
  );
});

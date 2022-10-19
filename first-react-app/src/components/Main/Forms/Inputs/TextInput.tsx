import React from 'react';
import { InputPropsType } from 'data/types';

const TextInput = React.forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
  const { name } = props;
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
        data-testid={`form-input-${name}`}
      />
    </div>
  );
});

export default TextInput;

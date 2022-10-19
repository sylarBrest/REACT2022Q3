import React from 'react';
import { InputPropsType } from 'data/types';

const RadioInput = React.forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
  const { name } = props;
  const nameF = name[0].toUpperCase() + name.slice(1);

  return (
    <div className={`gender-choice-item item-${name}`}>
      <input
        className="field gender-field"
        id={name}
        type="radio"
        name="radio"
        value={name}
        ref={ref}
        data-testid={`form-input-gender-${name}`}
      />
      <label className="gender-label" htmlFor={name}>
        {nameF}
      </label>
    </div>
  );
});

export default RadioInput;

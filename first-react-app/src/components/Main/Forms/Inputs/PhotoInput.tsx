import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormDataPropsType } from 'data/types';

import photoIcon from 'assets/svg/photo.svg';

export const PhotoInput = React.forwardRef<
  HTMLInputElement,
  ReturnType<UseFormRegister<FormDataPropsType>>
>((props, ref) => {
  const { name, onChange } = props;
  const nameF = name[0].toUpperCase() + name.slice(1);

  return (
    <>
      <label className="field-label" htmlFor={`${name}-upload`}>
        <img className={`${name}-name`} src={photoIcon} alt={`${nameF} Upload`} />
        Upload your photo
      </label>
      <input
        className={`field ${name}-field`}
        id={`${name}-upload`}
        type="file"
        name={name}
        capture="environment"
        ref={ref}
        onChange={onChange}
        accept="image/*"
        data-testid={`form-input-${name}`}
      />
    </>
  );
});

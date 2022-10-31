import { SubmitHandler, useForm } from 'react-hook-form';
import { isValidBirthDate, isValidCountry, isValidForm } from 'utils';
import { FormDataPropsType, FormPropsType } from 'data/types';
import { CheckboxInput, DateInput, PhotoInput, RadioInput, Select, TextInput } from './Inputs';
import { Banner } from './Banner/Banner';
import { ValidationMessage } from './ValidationMessage';
import './Form.css';
import { useEffect, useState } from 'react';

export const Form = (props: FormPropsType) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isDirty },
  } = useForm<FormDataPropsType>();

  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsBannerVisible(isSubmitSuccessful);
      reset();
    } else {
      setTimeout(() => setIsBannerVisible(isSubmitSuccessful), 3000);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormDataPropsType> = (data) => {
    const formData: FormDataPropsType = { ...data };
    formData.photo = (formData.photo as unknown as FileList)[0];
    props.updateData(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <div className="photo-upload">
        <PhotoInput
          {...register('photo', { required: { value: true, message: 'Photo not present' } })}
        />
        <ValidationMessage message={errors.photo?.message || ''} />
      </div>
      <div className="personal-data">
        <TextInput label="name" register={register} />
        <ValidationMessage message={errors.name?.message || ''} />
        <TextInput label="surname" register={register} />
        <ValidationMessage message={errors.surname?.message || ''} />
        <DateInput
          {...register('birthDate', {
            validate: (birthdate) => isValidBirthDate(birthdate) || 'You must be 18 years old',
          })}
        />
        <ValidationMessage message={errors.birthDate?.message || ''} />
        <div className="personal-data-input input-gender">
          <span className="field-label">Gender: </span>
          <fieldset className="gender-choice">
            <RadioInput label="gender" register={register} gender="male" />
            <RadioInput label="gender" register={register} gender="female" />
          </fieldset>
        </div>
        <ValidationMessage message={errors.gender?.message || ''} />
        <Select
          {...register('country', {
            validate: (country) => isValidCountry(country) || 'Choose your country',
          })}
        />
        <ValidationMessage message={errors.country?.message || ''} />
      </div>
      <CheckboxInput
        {...register('consent', {
          required: { value: true, message: 'Please give your consent by checking the label' },
        })}
      />
      <ValidationMessage message={errors.consent?.message || ''} />
      <input
        className="submit"
        type="submit"
        value="Submit"
        data-testid="form-input-submit"
        disabled={!isDirty || isValidForm(errors)}
      />
      <Banner name="banner" isVisible={isBannerVisible} />
    </form>
  );
};

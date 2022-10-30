import { SubmitHandler, useForm } from 'react-hook-form';
import { isValidBirthDate, isValidCountry } from 'utils';
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
      setTimeout(() => setIsBannerVisible(isSubmitSuccessful), 5000);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<FormDataPropsType> = (data) => {
    console.log(data);
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
        <ValidationMessage isInvalid={true} message={errors.photo?.message || ''} />
      </div>
      <div className="personal-data">
        <TextInput label="name" register={register} />
        <ValidationMessage isInvalid={true} message={errors.name?.message || ''} />
        <TextInput label="surname" register={register} />
        <ValidationMessage isInvalid={true} message={errors.surname?.message || ''} />
        <DateInput
          {...register('birthDate', {
            validate: (birthdate) => isValidBirthDate(birthdate) || 'You must be 18 years old',
          })}
        />
        <ValidationMessage isInvalid={true} message={errors.birthDate?.message || ''} />
        <div className="personal-data-input input-gender">
          <span className="field-label">Gender: </span>
          <fieldset className="gender-choice">
            <RadioInput label="gender" register={register} gender="male" />
            <RadioInput label="gender" register={register} gender="female" />
          </fieldset>
        </div>
        <ValidationMessage isInvalid={true} message={errors.gender?.message || ''} />
        <Select
          {...register('country', {
            validate: (country) => isValidCountry(country) || 'Choose your country',
          })}
        />
        <ValidationMessage isInvalid={true} message={errors.country?.message || ''} />
      </div>
      <CheckboxInput
        {...register('consent', {
          required: { value: true, message: 'Please give your consent by checking the label' },
        })}
      />
      <ValidationMessage isInvalid={true} message={errors.consent?.message || ''} />
      <input
        className="submit"
        type="submit"
        value="Submit"
        data-testid="form-input-submit"
        disabled={!isDirty}
      />
      <Banner name="banner" isVisible={isBannerVisible} />
    </form>
  );
};

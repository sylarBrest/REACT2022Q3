import { SubmitHandler, useForm } from 'react-hook-form';
import { isValidForm } from 'utils';
import { FormDataPropsType } from 'data/types';
import { CheckboxInput, DateInput, PhotoInput, Select, TextInput } from './Inputs';
import { Banner } from './Banner/Banner';
import './Form.css';
import { useEffect, useState } from 'react';
import { RadioGroup } from './Inputs/RadioGroup';
import { saveFormData } from 'redux/formSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export const Form = () => {
  const dispatch = useAppDispatch();
  const currentId = useAppSelector((state) => state.form.data.length);

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
    const cardData: FormDataPropsType = { ...data };
    cardData.photo = URL.createObjectURL((cardData.photo as unknown as FileList)[0]);
    cardData.id = currentId;
    dispatch(saveFormData(cardData));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <PhotoInput label="photo" register={register} error={errors.photo?.message} />
      <div className="personal-data">
        <TextInput label="name" register={register} error={errors.name?.message} />
        <TextInput label="surname" register={register} error={errors.surname?.message} />
        <DateInput label="birthDate" register={register} error={errors.birthDate?.message} />
        <RadioGroup label="gender" register={register} error={errors.gender?.message} />
        <Select label="country" register={register} error={errors.country?.message} />
      </div>
      <CheckboxInput label="consent" register={register} error={errors.consent?.message} />
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

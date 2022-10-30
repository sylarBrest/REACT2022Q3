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
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormDataPropsType>();

  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    setIsBannerVisible(isSubmitSuccessful ? true : false);
  }, [isSubmitSuccessful]);
  /* photo: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  maleGender: React.RefObject<HTMLInputElement>;
  femaleGender: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  consent: React.RefObject<HTMLInputElement>;
  banner: React.RefObject<HTMLDivElement>;
  isValidated: ValidatedType;

  constructor(props: FormPropsType) {
    super(props);
    this.photo = React.createRef();
    this.name = React.createRef();
    this.surname = React.createRef();
    this.birthDate = React.createRef();
    this.maleGender = React.createRef();
    this.femaleGender = React.createRef();
    this.country = React.createRef();
    this.consent = React.createRef();
    this.banner = React.createRef();

    this.state = {
      isChanged: false,
      isSubmitPressed: false,
      isBannerVisible: false,
    };

    this.isValidated = {
      photo: false,
      name: false,
      surname: false,
      birthDate: false,
      gender: false,
      country: false,
      consent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.isValidated = {
      photo: false,
      name: false,
      surname: false,
      birthDate: false,
      gender: false,
      country: false,
      consent: false,
    };

    this.setState(
      {
        isChanged: false,
        isSubmitPressed: false,
      },
      () => {
        setTimeout(() => {
          this.setState({ isBannerVisible: false });
        }, 3000);
      }
    );
  }

  handleChange() {
    this.setState({ isChanged: true });
  } */

  const onSubmit: SubmitHandler<FormDataPropsType> = (data) => {
    console.log(data);
    console.log(errors);
    /*     event.preventDefault();

    const photoInput = this.photo.current as HTMLInputElement;
    const nameInput = this.name.current as HTMLInputElement;
    const surnameInput = this.surname.current as HTMLInputElement;
    const birthDateInput = this.birthDate.current as HTMLInputElement;
    const maleGenderInput = this.maleGender.current as HTMLInputElement;
    const femaleGenderInput = this.femaleGender.current as HTMLInputElement;
    const countrySelect = this.country.current as HTMLSelectElement;
    const consentInput = this.consent.current as HTMLInputElement;
    let photoInputFile!: File;

    if (photoInput.files) {
      photoInputFile = photoInput.files[0];
    }

    const isValidated: ValidatedType = {
      photo: photoInputFile ? photoInputFile.type.includes('image/') : false,
      name: isValidName(nameInput.value),
      surname: isValidName(surnameInput.value),
      birthDate: isValidBirthDate(birthDateInput.value),
      gender: maleGenderInput.checked || femaleGenderInput.checked,
      country: isValidCountry(countrySelect.value),
      consent: consentInput.checked,
    };

    const formData: FormDataPropsType = {
      photo: photoInputFile ? photoInputFile : new Blob(),
      name: nameInput.value,
      surname: surnameInput.value,
      birthDate: birthDateInput.value,
      gender: maleGenderInput.checked ? 'male' : 'female',
      country: countrySelect.value,
      consent: true,
    };

    if (isValidForm(isValidated)) {
      this.setState(
        {
          isBannerVisible: true,
        },
        () => this.props.updateData(formData)
      );

      (event.target as HTMLFormElement).reset();
      this.reset();
    }

    this.isValidated = isValidated;

    this.setState({
      isSubmitPressed: true,
      isChanged: false,
    });
  */
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
      <input className="submit" type="submit" value="Submit" data-testid="form-input-submit" />
      <Banner name="banner" isVisible={isBannerVisible} />
    </form>
  );
};

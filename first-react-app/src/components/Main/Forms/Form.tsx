import React from 'react';
import { FormDataPropsType, FormPropsType, FormStateType, ValidatedType } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidForm, isValidName } from 'utils';
import ValidationMessage from './ValidationMessage';
import { CheckboxInput, DateInput, PhotoInput, RadioInput, Select, TextInput } from './Inputs';
import './Form.css';
import Banner from './Banner';

class Form extends React.Component<FormPropsType, FormStateType> {
  photo: React.RefObject<HTMLInputElement>;
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
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();

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
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        data-testid="form"
      >
        <div className="photo-upload">
          <PhotoInput name="photo" ref={this.photo} />
          <ValidationMessage
            isInvalid={this.state.isSubmitPressed && !this.isValidated.photo}
            message="Photo not present"
          />
        </div>
        <div className="personal-data">
          <TextInput ref={this.name} name="name" />
          <ValidationMessage
            isInvalid={this.state.isSubmitPressed && !this.isValidated.name}
            message="Name not valid"
          />
          <TextInput ref={this.surname} name="surname" />
          <ValidationMessage
            isInvalid={this.state.isSubmitPressed && !this.isValidated.surname}
            message="Surname not valid"
          />
          <DateInput name="birthdate" ref={this.birthDate} />
          <ValidationMessage
            isInvalid={this.state.isSubmitPressed && !this.isValidated.birthDate}
            message="Birthdate not valid"
          />
          <div className="personal-data-input input-gender">
            <span className="field-label">Gender: </span>
            <fieldset className="gender-choice">
              <RadioInput ref={this.maleGender} name="male" />
              <RadioInput ref={this.femaleGender} name="female" />
            </fieldset>
          </div>
          <ValidationMessage
            isInvalid={this.state.isSubmitPressed && !this.isValidated.gender}
            message="Choose your gender"
          />
          <Select name="country" ref={this.country} />
          <ValidationMessage
            isInvalid={this.state.isSubmitPressed && !this.isValidated.country}
            message="Choose your country"
          />
        </div>
        <CheckboxInput name="consent" ref={this.consent} />
        <ValidationMessage
          isInvalid={this.state.isSubmitPressed && !this.isValidated.consent}
          message="Please give your consent by checking the label"
        />
        <input
          className="submit"
          type="submit"
          value="Submit"
          disabled={!this.state.isChanged}
          data-testid="form-input-submit"
        />
        <Banner name="banner" isVisible={this.state.isBannerVisible} ref={this.banner} />
      </form>
    );
  }
}

export default Form;

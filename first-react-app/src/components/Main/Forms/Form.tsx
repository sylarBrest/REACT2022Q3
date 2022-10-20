import React from 'react';
import { FormDataPropsType, FormPropsType, FormStateType, ValidatedType } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidForm, isValidName } from 'utils';
import ValidationMessage from './ValidationMessage';
import { CheckboxInput, DateInput, PhotoInput, RadioInput, Select, TextInput } from './Inputs';
import './Form.css';
import Modal from './Modal';
import FormCardsContainer from './Cards/FormCardsContainer';

class Form extends React.Component<FormPropsType, FormStateType> {
  photo: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthDate: React.RefObject<HTMLInputElement>;
  maleGender: React.RefObject<HTMLInputElement>;
  femaleGender: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  consent: React.RefObject<HTMLInputElement>;
  modal: React.RefObject<HTMLDivElement>;

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
    this.modal = React.createRef();
    this.state = {
      isValidated: {
        photo: false,
        name: false,
        surname: false,
        birthdate: false,
        gender: false,
        country: false,
        consent: false,
      },
      formData: [
        {
          photo: new Blob(),
          name: '',
          surname: '',
          birthdate: '',
          gender: '',
          country: '',
          consent: false,
        },
      ],
      isChanged: false,
      isSubmitted: false,
      isMessageVisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState(
      {
        isChanged: false,
        isSubmitted: false,
        isValidated: {
          photo: false,
          name: false,
          surname: false,
          birthdate: false,
          gender: false,
          country: false,
          consent: false,
        },
      },
      () => {
        setTimeout(() => {
          this.setState({ isMessageVisible: false });
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
    const birthdateInput = this.birthDate.current as HTMLInputElement;
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
      birthdate: isValidBirthDate(birthdateInput.value),
      gender: maleGenderInput.checked || femaleGenderInput.checked,
      country: isValidCountry(countrySelect.value),
      consent: consentInput.checked,
    };

    const formData: FormDataPropsType = {
      photo: photoInputFile ? photoInputFile : new Blob(),
      name: nameInput.value,
      surname: surnameInput.value,
      birthdate: birthdateInput.value,
      gender: maleGenderInput.checked ? 'male' : 'female',
      country: countrySelect.value,
      consent: true,
    };

    if (isValidForm(isValidated)) {
      this.setState({
        formData: [...this.state.formData, formData],
        isMessageVisible: true,
      });

      (event.target as HTMLFormElement).reset();
      this.reset();
    }

    this.setState({
      isValidated,
      isSubmitted: true,
      isChanged: false,
    });
  }

  render() {
    return (
      <>
        <form
          className="form"
          onSubmit={this.props.onSubmit || this.handleSubmit}
          onChange={this.props.onChange || this.handleChange}
          data-testid="form"
        >
          <div className="photo-upload">
            <PhotoInput name="photo" ref={this.photo} />
            <ValidationMessage
              isInvalid={this.state.isSubmitted && !this.state.isValidated.photo}
              message="Photo not present"
            />
          </div>
          <div className="personal-data">
            <TextInput ref={this.name} name="name" />
            <ValidationMessage
              isInvalid={this.state.isSubmitted && !this.state.isValidated.name}
              message="Name not valid"
            />
            <TextInput ref={this.surname} name="surname" />
            <ValidationMessage
              isInvalid={this.state.isSubmitted && !this.state.isValidated.surname}
              message="Surname not valid"
            />
            <DateInput name="birthdate" ref={this.birthDate} />
            <ValidationMessage
              isInvalid={this.state.isSubmitted && !this.state.isValidated.birthdate}
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
              isInvalid={this.state.isSubmitted && !this.state.isValidated.gender}
              message="Choose your gender"
            />
            <Select name="country" ref={this.country} />
            <ValidationMessage
              isInvalid={this.state.isSubmitted && !this.state.isValidated.country}
              message="Choose your country"
            />
          </div>
          <CheckboxInput name="consent" ref={this.consent} />
          <ValidationMessage
            isInvalid={this.state.isSubmitted && !this.state.isValidated.consent}
            message="Please give your consent by checking the label"
          />
          <input
            className="submit"
            type="submit"
            value="Submit"
            disabled={!this.state.isChanged}
            data-testid="form-input-submit"
          />
          <Modal name="modal" isVisible={this.state.isMessageVisible} ref={this.modal} />
        </form>
        <FormCardsContainer formData={this.state.formData} />
      </>
    );
  }
}

export default Form;

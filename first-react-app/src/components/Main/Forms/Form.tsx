import { COUNTRIES, MIN_AGE, SELECT_DEFAULT_OPTION } from 'data/constants';
import React, { FormEvent } from 'react';
import './Form.css';
import photo from 'assets/svg/photo.svg';
import { FormDataPropsType, FormPropsType, FormStateType, ValidatedType } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidForm, isValidName } from 'utils';
import FormCard from './FormCard';

class Form extends React.Component<FormPropsType, FormStateType> {
  photo: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthdate: React.RefObject<HTMLInputElement>;
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
    this.birthdate = React.createRef();
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

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    const photoInput = this.photo.current as HTMLInputElement;
    const nameInput = this.name.current as HTMLInputElement;
    const surnameInput = this.surname.current as HTMLInputElement;
    const birthdateInput = this.birthdate.current as HTMLInputElement;
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
            <label className="field-label" htmlFor="photo-upload">
              <img className="image-label" src={photo} alt="Photo Upload" />
              Upload your photo
            </label>
            <input
              className="field photo-field"
              id="photo-upload"
              type="file"
              name="image"
              capture="environment"
              ref={this.photo}
              data-testid="form-input-photo"
            />
            <p
              className="validation-message"
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.photo ? '1' : '0',
              }}
            >
              Photo not present
            </p>
          </div>
          <div className="personal-data">
            <div className="personal-data-input input-name">
              <label className="field-label" htmlFor="name">
                Name:
              </label>
              <input
                className="field"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                ref={this.name}
                data-testid="form-input-name"
              />
            </div>
            <p
              className="validation-message"
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.name ? '1' : '0',
              }}
            >
              Name not valid
            </p>
            <div className="personal-data-input input-surname">
              <label className="field-label" htmlFor="surname">
                Surname:
              </label>
              <input
                className="field"
                id="surname"
                type="text"
                name="surname"
                placeholder="Surname"
                ref={this.surname}
                data-testid="form-input-surname"
              />
            </div>
            <p
              className="validation-message"
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.surname ? '1' : '0',
              }}
            >
              Surname not valid
            </p>
            <div className="personal-data-input input-birthdate">
              <label className="field-label" htmlFor="birthdate">
                Date of birth:
              </label>
              <input
                className="field"
                id="birthdate"
                type="date"
                name="birthdate"
                ref={this.birthdate}
                data-testid="form-input-birthdate"
              />
            </div>
            <p
              className="validation-message"
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.birthdate ? '1' : '0',
              }}
            >
              Birthdate not valid
            </p>
            <div className="personal-data-input input-gender">
              <span className="field-label">Gender: </span>
              <fieldset className="gender-choice">
                <div className="gender-choice-item item-male">
                  <input
                    className="field gender-field"
                    id="male"
                    type="radio"
                    name="radio"
                    value="male"
                    ref={this.maleGender}
                    data-testid="form-input-gender-male"
                  />
                  <label className="gender-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="gender-choice-item item-female">
                  <input
                    className="field gender-field"
                    id="female"
                    type="radio"
                    name="radio"
                    value="female"
                    ref={this.femaleGender}
                    data-testid="form-input-gender-female"
                  />
                  <label className="gender-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </fieldset>
            </div>
            <p
              className="validation-message"
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.gender ? '1' : '0',
              }}
            >
              Choose your gender
            </p>
            <div className="personal-data-input input-country">
              <label className="field-label" htmlFor="country">
                Country:
              </label>
              <select
                className="field"
                id="country"
                name="country"
                ref={this.country}
                data-testid="form-select-country"
              >
                <option hidden>{SELECT_DEFAULT_OPTION}</option>
                {COUNTRIES.map((country: string) => (
                  <option value={country} key={country.toLowerCase()}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <p
              className="validation-message"
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.country ? '1' : '0',
              }}
            >
              Choose country
            </p>
          </div>
          <div className="consent">
            <input
              className="field"
              id="personal"
              type="checkbox"
              name="personal"
              value="agree"
              ref={this.consent}
              data-testid="form-input-consent"
            />
            <label className="field-label" htmlFor="personal">
              I confirm that I am over {MIN_AGE} years old and consent to my personal data
            </label>
          </div>
          <p
            className="validation-message"
            style={{
              opacity: this.state.isSubmitted && !this.state.isValidated.consent ? '1' : '0',
            }}
          >
            Please give your consent by checking the label
          </p>
          <input
            className="submit"
            type="submit"
            value="Submit"
            disabled={!this.state.isChanged}
            data-testid="form-input-submit"
          />
        </form>
        <div
          className="modal"
          style={{
            display: this.state.isMessageVisible ? 'flex' : 'none',
          }}
          ref={this.modal}
          data-testid="modal"
        >
          <span>You succesfully submitted data!</span>
        </div>
        <div className="personal-cards">
          {this.state.formData
            .filter((data) => !!data.consent)
            .map((data) => (
              <FormCard {...data} key={data.name + data.surname} />
            ))}
        </div>
      </>
    );
  }
}

export default Form;

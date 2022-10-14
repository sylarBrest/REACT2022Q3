import { COUNTRIES, MIN_AGE, SELECT_DEFAULT_OPTION } from 'data/constants';
import React, { FormEvent } from 'react';
import './Form.css';
import photo from 'assets/svg/photo.svg';
import { TFormData, TFormProps, TFormState, TValidated } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidName } from 'utils';
import FormCard from './FormCard';

class Form extends React.Component<TFormProps, TFormState> {
  photo: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthdate: React.RefObject<HTMLInputElement>;
  maleGender: React.RefObject<HTMLInputElement>;
  femaleGender: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  consent: React.RefObject<HTMLInputElement>;
  modal: React.RefObject<HTMLDivElement>;

  constructor(props: TFormProps) {
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
          photo: '',
          name: '',
          surname: '',
          birthdate: '',
          gender: '',
          country: '',
          consent: false,
        },
      ],
      isChange: false,
      isSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isValidatedForm(isValidated: TValidated): boolean {
    return Object.values(isValidated).every((flag: boolean) => !!flag);
  }

  reset() {
    this.setState(() => ({
      isChange: false,
      isSubmitted: false,
    }));
    setTimeout(() => {
      const modalDiv = this.modal.current as HTMLDivElement;
      modalDiv.style.display = 'none';
    }, 5000);
  }

  handleChange() {
    this.setState({ isChange: true });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(this.state.formData);

    const photoInput = this.photo.current as HTMLInputElement;
    const nameInput = this.name.current as HTMLInputElement;
    const surnameInput = this.surname.current as HTMLInputElement;
    const birthdateInput = this.birthdate.current as HTMLInputElement;
    const maleGenderInput = this.maleGender.current as HTMLInputElement;
    const femaleGenderInput = this.femaleGender.current as HTMLInputElement;
    const countrySelect = this.country.current as HTMLSelectElement;
    const consentInput = this.consent.current as HTMLInputElement;

    const isValidated: TValidated = {
      photo: photoInput.files?.item(0)?.type.includes('png') || false,
      name: isValidName(nameInput.value),
      surname: isValidName(surnameInput.value),
      birthdate: isValidBirthDate(birthdateInput.value),
      gender: maleGenderInput.checked || femaleGenderInput.checked,
      country: isValidCountry(countrySelect.value),
      consent: consentInput.checked,
    };

    const formData: TFormData = {
      photo: photoInput.files?.item(0)?.name || '',
      name: nameInput.value,
      surname: surnameInput.value,
      birthdate: birthdateInput.value,
      gender: maleGenderInput.checked ? 'male' : 'female',
      country: countrySelect.value,
      consent: true,
    };

    if (this.isValidatedForm(isValidated)) {
      this.setState(() => ({ formData: [...this.state.formData, formData] }));
      (event.target as HTMLFormElement).reset();
    }

    this.setState(() => ({
      isValidated,
      isSubmitted: true,
    }));
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="photo-upload">
            <label htmlFor="photo-upload">
              <img src={photo} alt="Photo Upload" />
              Upload your photo
            </label>
            <input
              id="photo-upload"
              type="file"
              name="image"
              capture="user"
              accept=".jpg, .png"
              ref={this.photo}
            />
            <p
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.photo ? '1' : '0',
              }}
            >
              Photo not present
            </p>
          </div>
          <div className="personal-data">
            <div className="personal-data-input input-name">
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" name="name" placeholder="Name" ref={this.name} />
            </div>
            <p
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.name ? '1' : '0',
              }}
            >
              Name not valid
            </p>
            <div className="personal-data-input input-surname">
              <label htmlFor="surname">Surname:</label>
              <input
                id="surname"
                type="text"
                name="surname"
                placeholder="Surname"
                ref={this.surname}
              />
            </div>
            <p
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.surname ? '1' : '0',
              }}
            >
              Surname not valid
            </p>
            <div className="personal-data-input input-birthdate">
              <label htmlFor="birthdate">Date of birth:</label>
              <input
                id="birthdate"
                type="date"
                name="birthdate"
                min="1930-01-01"
                max={new Date().toJSON().slice(0, 10)}
                ref={this.birthdate}
              />
            </div>
            <p
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.birthdate ? '1' : '0',
              }}
            >
              Birthdate not valid
            </p>
            <div className="personal-data-input input-gender">
              <span>Gender: </span>
              <fieldset className="gender-choice">
                <div className="gender-choice-item item-male">
                  <input id="male" type="radio" name="radio" value="male" ref={this.maleGender} />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="gender-choice-item item-female">
                  <input
                    id="female"
                    type="radio"
                    name="radio"
                    value="female"
                    ref={this.femaleGender}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </fieldset>
            </div>
            <p
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.gender ? '1' : '0',
              }}
            >
              Choose your gender
            </p>
            <div className="personal-data-input input-country">
              <label htmlFor="country">Country:</label>
              <select id="country" name="country" ref={this.country}>
                <option hidden>{SELECT_DEFAULT_OPTION}</option>
                {COUNTRIES.map((country: string) => (
                  <option value={country} key={country.toLowerCase()}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <p
              style={{
                opacity: this.state.isSubmitted && !this.state.isValidated.country ? '1' : '0',
              }}
            >
              Choose country
            </p>
          </div>
          <div className="consent">
            <input id="personal" type="checkbox" name="personal" value="agree" ref={this.consent} />
            <label htmlFor="personal">
              I confirm that I am over {MIN_AGE} years old and consent to my personal data
            </label>
          </div>
          <p
            style={{
              opacity: this.state.isSubmitted && !this.state.isValidated.consent ? '1' : '0',
            }}
          >
            Please give your consent by checking the label
          </p>
          <input className="submit" type="submit" value="Submit" disabled={!this.state.isChange} />
        </form>
        <div
          className="modal"
          style={{
            display:
              this.state.isSubmitted && this.isValidatedForm(this.state.isValidated)
                ? 'block'
                : 'none',
          }}
          ref={this.modal}
        >
          You succesfully submitted data!
        </div>
        {this.state.formData
          .filter((data) => !!data.consent)
          .map((data) => (
            <FormCard {...data} key={data.name + data.surname} />
          ))}
      </>
    );
  }
}

export default Form;

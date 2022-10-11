import { COUNTRIES, MIN_AGE, SELECT_DEFAULT_OPTION } from 'data/constants';
import React, { FormEvent } from 'react';
import './Form.css';
import photo from 'assets/svg/photo.svg';
import { TFormProps, TFormState } from 'data/types';
import { isValidBirthDate, isValidCountry, isValidName } from 'utils';

class Form extends React.Component<TFormProps, TFormState> {
  photo: React.RefObject<HTMLInputElement>;
  name: React.RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  birthdate: React.RefObject<HTMLInputElement>;
  maleGender: React.RefObject<HTMLInputElement>;
  femaleGender: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  consent: React.RefObject<HTMLInputElement>;

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
          name: '',
          surname: '',
          birthdate: '',
          gender: '',
          country: '',
          consent: false,
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  isValidatedForm() {
    return Object.values(this.state.isValidated).every((flag: boolean) => !!flag);
  }

  handleChange() {
    console.log(this.state.isValidated);
    console.log(this.isValidatedForm());
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

    this.setState(() => ({
      isValidated: {
        photo: photoInput.value.includes('png'),
        name: isValidName(nameInput.value),
        surname: isValidName(surnameInput.value),
        birthdate: isValidBirthDate(birthdateInput.value),
        gender: maleGenderInput.checked || femaleGenderInput.checked,
        country: isValidCountry(countrySelect.value),
        consent: consentInput.checked,
      },
    }));

    console.log('photo', this.photo.current?.value);
  }

  render() {
    return (
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
          <p style={{ opacity: this.state.isValidated.photo ? '0' : '1' }}>Photo not present</p>
        </div>
        <div className="personal-data">
          <div className="personal-data-input input-name">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" placeholder="Name" ref={this.name} />
          </div>
          <p style={{ opacity: this.state.isValidated.name ? '0' : '1' }}>Name not valid</p>
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
          <p style={{ opacity: this.state.isValidated.surname ? '0' : '1' }}>Surname not valid</p>
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
          <p style={{ opacity: this.state.isValidated.birthdate ? '0' : '1' }}>
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
          <p style={{ opacity: this.state.isValidated.gender ? '0' : '1' }}>Choose your gender</p>
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
          <p style={{ opacity: this.state.isValidated.country ? '0' : '1' }}>Choose country</p>
        </div>
        <div className="consent">
          <input id="personal" type="checkbox" name="personal" value="agree" ref={this.consent} />
          <label htmlFor="personal">
            I confirm that I am over {MIN_AGE} years old and consent to my personal data
          </label>
        </div>
        <p style={{ opacity: this.state.isValidated.country ? '0' : '1' }}>
          Please give your consent by checking the label
        </p>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;

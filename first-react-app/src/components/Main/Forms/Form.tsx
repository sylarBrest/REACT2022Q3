import { COUNTRIES } from 'data/constants';
import React, { FormEvent } from 'react';
import './Form.css';
import photo from 'assets/svg/photo.svg';
import { TFormProps, TFormState } from 'data/types';

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
      isValidated: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('photo', this.photo.current?.value);
    console.log('name', this.name.current?.value);
    console.log('surname', this.surname.current?.value);
    console.log('birthdate', this.birthdate.current?.value);
    console.log('male gender', this.maleGender.current?.checked);
    console.log('female gender', this.femaleGender.current?.checked);
    console.log('country', this.country.current?.value);
    console.log('consent', this.consent.current?.checked);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
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
        </div>
        <div className="personal-data">
          <div className="personal-data-input input-name">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" placeholder="Name" ref={this.name} />
          </div>
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
          <div className="personal-data-input input-country">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country" ref={this.country}>
              <option hidden>Choose Country</option>
              {COUNTRIES.map((country: string) => (
                <option value={country.toLowerCase()} key={country.toLowerCase()}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="consent">
          <input id="personal" type="checkbox" name="personal" value="agree" ref={this.consent} />
          <label htmlFor="personal">I consent to my personal data</label>
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;

import { COUNTRIES } from 'data/constants';
import React from 'react';
import './Form.css';
import photo from 'assets/svg/photo.svg';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="photo-upload">
          <label htmlFor="photo-upload">
            <img src={photo} alt="Photo Upload" />
            Upload your photo
          </label>
          <input id="photo-upload" type="file" name="image" capture="user" accept=".jpg, .png" />
        </div>
        <div className="personal-data">
          <div className="personal-data-input input-name">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" placeholder="Name" />
          </div>
          <div className="personal-data-input input-surname">
            <label htmlFor="surname">Surname:</label>
            <input id="surname" type="text" name="surname" placeholder="Surname" />
          </div>
          <div className="personal-data-input input-birthdate">
            <label htmlFor="birthdate">Date of birth:</label>
            <input
              id="birthdate"
              type="date"
              name="birthdate"
              min="1930-01-01"
              max={new Date().toJSON().slice(0, 10)}
            />
          </div>
          <div className="personal-data-input input-gender">
            <span>Gender: </span>
            <div className="gender-choice">
              <div className="gender-choice-item item-male">
                <input id="male" type="radio" name="radio" value="male" defaultChecked />
                <label htmlFor="male">Male</label>
              </div>
              <div className="gender-choice-item item-female">
                <input id="female" type="radio" name="radio" value="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="personal-data-input input-country">
            <label htmlFor="country">Country:</label>
            <select id="country" name="country">
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
          <input id="personal" type="checkbox" name="personal" value="agree" />
          <label htmlFor="personal">I consent to my personal data</label>
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;

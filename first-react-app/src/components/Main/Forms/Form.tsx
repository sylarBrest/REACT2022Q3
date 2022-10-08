import { COUNTRIES } from 'data/constants';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" placeholder="Surname" />
        </label>
        <label>
          Date of birth:
          <input
            type="date"
            name="birthdate"
            min="1930-01-01"
            max={new Date().toISOString().slice(0, 10)}
          />
        </label>
        <div>
          <span>Your sex:</span>
          <label>
            Male
            <input type="radio" name="sex" value="male" />
          </label>
          <label>
            Female
            <input type="radio" name="sex" value="female" />
          </label>
        </div>
        <label>
          Country:
          <select name="country">
            {COUNTRIES.map((country: string) => (
              <option value={country.toLowerCase()} key={country.toLowerCase()}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label>
          I consent to my personal data
          <input type="checkbox" name="personal" value="agree" />
        </label>
        <label>
          Upload your photo
          <input type="file" name="image" capture="user" accept=".jpg,.png" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;

import { TFormData } from 'data/types';
import './FormCard.css';

const FormCard = (props: TFormData) => (
  <div className="personal-card" data-testid="form-card-data">
    <img
      className="card-photo"
      src={URL.createObjectURL(props.photo)}
      alt={props.name + props.surname}
    />
    <div className="personal-card-data">
      <p className="card-name">
        <span className="item-label">Name: </span>
        {props.name}
      </p>
      <p className="card-surname">
        <span className="item-label">Surame: </span>
        {props.surname}
      </p>
      <p className="card-birthdate">
        <span className="item-label">Date of birth: </span>
        {props.birthdate}
      </p>
      <p className="card-gender">
        <span className="item-label">Gender: </span>
        {props.gender}
      </p>
      <p className="card-country">
        <span className="item-label">Country: </span>
        {props.country}
      </p>
    </div>
  </div>
);

export default FormCard;

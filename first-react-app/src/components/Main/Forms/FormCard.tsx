import { TFormData } from 'data/types';
import './FormCard.css';

const FormCard = (props: TFormData) => (
  <div className="personal-card">
    <img className="card-photo" src={props.photo} alt={props.name + props.surname} />
    <div className="personal-card-data">
      <p className="card-name">Name: {props.name}</p>
      <p className="card-surname">Surame: {props.surname}</p>
      <p className="card-birthdate">Date of birth: {props.birthdate}</p>
      <p className="card-gender">Gender: {props.gender}</p>
      <p className="card-country">Country: {props.country}</p>
    </div>
  </div>
);

export default FormCard;

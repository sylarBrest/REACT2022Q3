import { FormDataPropsType } from 'data/types';
import { CardItem } from './CardItem';
import './Card.css';

export const Card = (props: FormDataPropsType) => {
  const { photo, name, surname, birthDate, gender, country } = props;

  return (
    <div className="personal-card" data-testid="form-card-data">
      <img className="card-photo" src={URL.createObjectURL(photo)} alt={`${name} ${surname}`} />
      <div className="personal-card-data">
        <CardItem label="Name: " value={name} />
        <CardItem label="Surname: " value={surname} />
        <CardItem label="Date of birth: " value={birthDate} />
        <CardItem label="Gender: " value={gender} />
        <CardItem label="Country: " value={country} />
      </div>
    </div>
  );
};

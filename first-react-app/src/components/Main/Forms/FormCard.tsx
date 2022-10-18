import { TFormData } from 'data/types';
import FormCardItem from './FormCardItem';
import './FormCard.css';

const FormCard = (props: TFormData) => {
  const { photo, name, surname, birthdate, gender, country } = props;

  return (
    <div className="personal-card" data-testid="form-card-data">
      <img className="card-photo" src={URL.createObjectURL(photo)} alt={`${name} ${surname}`} />
      <div className="personal-card-data">
        <FormCardItem label="Name: " value={name} />
        <FormCardItem label="Surname: " value={surname} />
        <FormCardItem label="Date of birth: " value={birthdate} />
        <FormCardItem label="Gender: " value={gender} />
        <FormCardItem label="Country: " value={country} />
      </div>
    </div>
  );
};

export default FormCard;

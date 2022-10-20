import { FormCardsContainerPropsType } from 'data/types';
import FormCard from './FormCard';

const FormCardsContainer = (props: FormCardsContainerPropsType) => {
  return (
    <div className="personal-cards">
      {props.formData
        .filter((data) => !!data.consent)
        .map((data) => (
          <FormCard {...data} key={data.name + data.surname} />
        ))}
    </div>
  );
};

export default FormCardsContainer;

import { FormCardsContainerPropsType } from 'data/types';
import FormCard from './Card';

const CardsContainer = (props: FormCardsContainerPropsType) => {
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

export default CardsContainer;

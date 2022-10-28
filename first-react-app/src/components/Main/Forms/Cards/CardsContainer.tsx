import { FormCardsContainerPropsType } from 'data/types';
import { Card } from './Card';

export const CardsContainer = (props: FormCardsContainerPropsType) => {
  return (
    <div className="personal-cards">
      {props.formData
        .filter((data) => !!data.consent)
        .map((data) => (
          <Card {...data} key={data.name + data.surname} />
        ))}
    </div>
  );
};

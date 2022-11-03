import { useGlobalContext } from 'context/globalContext';
import { Card } from './Card';

export const CardsContainer = () => {
  const { state } = useGlobalContext();

  return (
    <div className="personal-cards">
      {state.form.data.map((data) => (
        <Card {...data} key={data.name + data.surname} />
      ))}
    </div>
  );
};

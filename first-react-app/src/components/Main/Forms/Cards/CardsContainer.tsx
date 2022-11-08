import { useAppSelector } from 'redux/types';
import { Card } from './Card';

export const CardsContainer = () => {
  const formData = useAppSelector((state) => state.form.data);

  return (
    <div className="personal-cards">
      {formData.map((data) => (
        <Card {...data} key={data.id} />
      ))}
    </div>
  );
};

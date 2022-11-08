import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Card } from './Card';

export const CardsContainer = () => {
  const formData = useSelector((state: RootState) => state.form.data);

  return (
    <div className="personal-cards">
      {formData.map((data) => (
        <Card {...data} key={data.name + data.surname} />
      ))}
    </div>
  );
};

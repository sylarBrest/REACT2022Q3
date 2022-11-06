import { FormCardItemPropsType } from 'data/types';

export const CardItem = ({ label, value }: FormCardItemPropsType) => {
  return (
    <p className="card-item">
      <span className="item-label">{label}</span>
      {value}
    </p>
  );
};

import { FormCardItemPropsType } from 'data/types';

export const CardItem = (props: FormCardItemPropsType) => {
  const { label, value } = props;

  return (
    <p className="card-item">
      <span className="item-label">{label}</span>
      {value}
    </p>
  );
};

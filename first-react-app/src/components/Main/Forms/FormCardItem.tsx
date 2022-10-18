import { FormCardItemProps } from 'data/types';

const CardItem = (props: FormCardItemProps) => {
  const { label, value } = props;

  return (
    <p className="card-item">
      <span className="item-label">{label}</span>
      {value}
    </p>
  );
};

export default CardItem;

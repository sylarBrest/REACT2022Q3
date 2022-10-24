import { FormCardItemPropsType } from 'data/types';

const FormCardItem = (props: FormCardItemPropsType) => {
  const { label, value } = props;

  return (
    <p className="card-item">
      <span className="item-label">{label}</span>
      {value}
    </p>
  );
};

export default FormCardItem;

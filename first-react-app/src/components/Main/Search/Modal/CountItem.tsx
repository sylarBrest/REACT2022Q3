import { CountItemPropsType } from 'data/types';

export const CountItem = (props: CountItemPropsType) => {
  const { label, icon, value } = props;

  return (
    <div className="count-item" title={label}>
      <img className="count-icon" src={icon} alt={`${label} icon`} />
      <p className="count-count">{value}</p>
    </div>
  );
};

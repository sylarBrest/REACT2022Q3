import { CountItemPropsType } from 'data/types';

export const CountItem = ({ label, icon, value }: CountItemPropsType) => {
  return (
    <div className="count-item" title={label}>
      <img className="count-icon" src={icon} alt={`${label} icon`} />
      <p className="count-count">{value}</p>
    </div>
  );
};

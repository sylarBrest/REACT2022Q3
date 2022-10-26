import { ModalItemPropsType } from 'data/types';

const ModalItem = (props: ModalItemPropsType) => {
  const { label, icon, value } = props;

  return (
    <div className="modal-item" title={label}>
      <img className="modal-icon" src={icon} alt={`${label} icon`} />
      <p className="modal-count">{value}</p>
    </div>
  );
};

export default ModalItem;

import { ModalPropsType } from 'data/types';

const Modal = (props: ModalPropsType) => {
  const { id, isVisible, setIsVisible } = props;

  return (
    <div
      className="modal"
      style={{ display: isVisible ? 'flex' : 'none' }}
      data-testid={`modal-${id}`}
    >
      <span>You succesfully submitted data!</span>
    </div>
  );
};

export default Modal;

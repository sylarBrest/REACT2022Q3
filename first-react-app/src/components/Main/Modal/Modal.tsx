import { ModalPropsType } from 'data/types';
import { FullCardModalContent } from './FullCardModalContent';
import './Modal.css';

const Modal = (props: ModalPropsType) => {
  const { onCloseModal } = props;

  return (
    <div className="modal-overlay" onClick={() => onCloseModal()} data-testid="modal-overlay">
      <FullCardModalContent {...props} />
    </div>
  );
};

export default Modal;

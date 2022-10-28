import { ModalPropsType } from 'data/types';
import { FullCardModalContent } from './FullCardModalContent';
import './Modal.css';

export const Modal = (props: ModalPropsType) => {
  return (
    <div className="modal-overlay" onClick={() => props.onCloseModal()} data-testid="modal-overlay">
      <FullCardModalContent {...props} />
    </div>
  );
};

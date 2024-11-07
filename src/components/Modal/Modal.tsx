import type { ReactNode } from "react";
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal ({isOpen, onClose, children} : ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button type="button" className="modal-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );

};

export default Modal;
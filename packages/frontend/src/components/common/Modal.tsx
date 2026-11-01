import { FC, ReactNode } from 'react';
import { Portal } from './Portal';

type ModalProps = {
  modalId: string;
  className?: string;
  children?: ReactNode;
  clickOutside?: () => void;
};

export const Modal: FC<ModalProps> = ({ modalId, className, children, clickOutside }) => {
  return (
    <Portal wrapperId="modal-container">
      <div className="modal modal--visible" id={modalId}>
        <a className="modal-overlay close-btn" aria-label="Close" onClick={clickOutside}></a>
        <div className={className ? `modal-content ${className}` : 'modal-content'} role="document">
          {children && children}
        </div>
      </div>
    </Portal>
  );
};

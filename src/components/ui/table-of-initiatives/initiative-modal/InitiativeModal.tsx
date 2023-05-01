import { ReactNode } from 'react';
import Modal from '../../modal/Modal';

import styles from './initiative-modal.module.scss';

interface Controls {
  cancelText: string;
  onCancel: () => void;
  submitText: string;
  onSubmit: () => void;
}

interface InitiativeModalProps {
  size: 's' | 'm';
  children?: ReactNode;
  controls: Controls;
}

export default function InitiativeModal({
  size,
  children,
  controls,
}: InitiativeModalProps) {
  return (
    <>
      <Modal size={size}>
        {children}

        <div className={styles.controls}>
          <button
            className={styles.cancel}
            onClick={controls.onCancel}>
            {controls.cancelText}
          </button>
          <button
            className={styles.submit}
            onClick={controls.onSubmit}>
            {controls.submitText}
          </button>
        </div>
      </Modal>
    </>
  );
}

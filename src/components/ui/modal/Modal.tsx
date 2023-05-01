import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  cancelText: string;
  onCancel: () => void;
  continueText: string;
  onContinue: () => void;
}

import styles from './modal.module.scss';

export default function Modal({
  children,
  cancelText,
  onCancel,
  continueText,
  onContinue,
}: ModalProps) {
  return (
    <>
      <section className={styles.modal}>
        {children}

        <div>
          <button
            onClick={onCancel}
            className={styles.cancel}>
            {cancelText}
          </button>
          <button
            onClick={onContinue}
            className={styles.continue}>
            {continueText}
          </button>
        </div>
      </section>
    </>
  );
}

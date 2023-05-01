import { ReactNode } from 'react';

import styles from './modal.module.scss';

interface ModalProps {
  size: 's' | 'm';
  children?: ReactNode;
}

export default function Modal({ children, size }: ModalProps) {
  return (
    <div className={`${styles.modal} ${styles[size]}`}>
      <div>{children}</div>
    </div>
  );
}

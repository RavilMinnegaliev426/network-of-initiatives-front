import { formatDate, formatDateForSEO } from '../../../../../utils/dateUtils';

import styles from './initiative-modal-header.module.scss';

interface InitiativeModalHeaderProps {
  className?: string;
  title: string;
  date: Date;
}

export default function InitiativeModalHeader({
  title,
  date,
  className = '',
}: InitiativeModalHeaderProps) {
  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <h2>{title}</h2>
        <time
          dateTime={formatDateForSEO(date)}
          className={styles.date}>
          {formatDate(date)}
        </time>
      </header>
    </>
  );
}

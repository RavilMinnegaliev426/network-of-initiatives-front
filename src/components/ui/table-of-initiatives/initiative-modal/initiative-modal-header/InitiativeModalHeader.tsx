import { useCustomSelector } from "../../../../../redux/customHooks/useCustomSelector";
import { formatDate, formatDateForSEO } from "../../../../../utils/dateUtils";

import styles from "./initiative-modal-header.module.scss";

interface InitiativeModalHeaderProps {
  title: string;
  date: Date;
}

export default function InitiativeModalHeader({
  title,
  date,
}: InitiativeModalHeaderProps) {
  const Check = useCustomSelector((state) => state.chekout);

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <time dateTime={formatDateForSEO(date)} className={styles.date}>
          {formatDate(date)}
        </time>
      </header>
    </>
  );
}

import Image from "next/image";
import { formatDate, formatDateForSEO } from "../../../../utils/dateUtils";
import styles from "./initiative-card.module.scss";

interface InitiativeCardProps {
  initiative: Initiative;
  onSelect: () => void;
}

export default function InitiativeCard({
  initiative,
  onSelect,
}: InitiativeCardProps) {
  return (
    <>
      <article className={styles.card}>
        <h3 className={styles.title}>{initiative.title}</h3>

        <div className={styles.description}>
          <h6>Описание проекта</h6>
          <p style={{ whiteSpace: "pre-line" }}>{initiative.description}</p>
        </div>

        <div className={styles.searching}>
          <h6>Кто нужен в команду</h6>
          <p style={{ whiteSpace: "pre-line" }}>{initiative.searching}</p>
        </div>

        <div className={styles.footer}>
          <time
            dateTime={formatDateForSEO(initiative.dateOfCreation)}
            className={styles.date}
          >
            {formatDate(initiative.dateOfCreation)}
          </time>

          <button className={styles.details} onClick={onSelect}>
            Подробнее
          </button>
        </div>
      </article>
    </>
  );
}

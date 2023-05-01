import Image from 'next/image';
import { formatDate, formatDateForSEO } from '../../../../utils/dateUtils';
import styles from './initiative-card.module.scss';

interface InitiativeCardProps {
  initiative: Initiative;
}

export default function InitiativeCard({ initiative }: InitiativeCardProps) {
  return (
    <>
      <article className={styles.card}>
        <h3 className={styles.title}>{initiative.title}</h3>

        <Image
          src='/soft-star.svg'
          alt='Soft star svg.'
          width={21}
          height={21}
          className={styles.star}
        />

        <div className={styles.description}>
          <h6>Описание проекта</h6>
          <p>{initiative.description}</p>
        </div>

        <div className={styles.searching}>
          <h6>Кто нужен в команду</h6>
          <p>{initiative.searching}</p>
        </div>

        <div className={styles.footer}>
          <time
            dateTime={formatDateForSEO(initiative.dateOfCreation)}
            className={styles.date}>
            {formatDate(initiative.dateOfCreation)}
          </time>

          <button className={styles.details}>Подробнее</button>
        </div>
      </article>
    </>
  );
}

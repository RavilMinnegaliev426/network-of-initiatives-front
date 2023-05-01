import styles from './initiative-modal-details.module.scss';

interface InitiativeModalDetailsProps {
  initiative: Initiative;
  onClose: () => void;
}

export default function InitiativeModalDetails({
  initiative,
  onClose,
}: InitiativeModalDetailsProps) {
  return (
    <>
      <article className={styles.initiative}>
        <header className={styles.header}>
          <h2>{initiative.title}</h2>
          <time date-time='!LATER'>
            <h3 className={styles.date}>15/04/2023</h3>
          </time>
        </header>

        <div className={styles.descriptionBlock}>
          <h3>Описание проекта</h3>
          <p>{initiative.description}</p>
        </div>

        <div className={styles.searchingBlock}>
          <h3>Кто нужен в команду</h3>
          <p>{initiative.searching}</p>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.close}
            onClick={onClose}>
            Закрыть
          </button>
          <button className={styles.request}>Оставить заявку</button>
        </div>
      </article>
    </>
  );
}

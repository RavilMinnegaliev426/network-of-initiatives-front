import { useState } from 'react';
import styles from './initiativeCard.module.scss';
import InitiativeModal from '../initiative-modal/initiative-modal-details/InitiativeModalDetails';

export default function InitiativeCard(initiative: Initiative) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <>
      <article className={styles.card}>
        <header>
          <div className={styles.headerTop}>
            <h4>{initiative.title}</h4>
            <time
              dateTime='!!!CHANGE!!!'
              className={styles.date}>
              {/* {initiative.dateOfCreation.toString()} */}
              4/29/2023
            </time>
          </div>

          <p className={styles.author}>{initiative.author}</p>
        </header>

        <div className={styles.descriptionBlock}>
          <h6>Описание проекта</h6>
          <p className={styles.description}>{initiative.description}</p>
        </div>

        <div className={styles.searchingBlock}>
          <h6>Кто нужен в команду</h6>
          <p>{initiative.searching}</p>
        </div>

        <div className={styles.requestContainer}>
          <button
            className={styles.request}
            onClick={toggleModal}>
            Оставить заявку
          </button>
        </div>
      </article>

      {modal ? (
        <>
          <div className={styles.overlay}></div>
          <InitiativeModal
            initiative={initiative}
            onClose={toggleModal}
          />
        </>
      ) : null}
    </>
  );
}

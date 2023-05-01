import InitiativeModal from '../InitiativeModal';
import InitiativeModalHeader from '../initiative-modal-header/InitiativeModalHeader';
import styles from './initiative-modal-details.module.scss';

interface InitiativeModalDetailsProps {
  initiative: Initiative;
}

const controls = {
  cancelText: 'Назад',
  onCancel: () => console.log(),
  submitText: 'Оставить заявку',
  onSubmit: () => console.log(),
};

export default function InitiativeModalDetails({
  initiative,
}: InitiativeModalDetailsProps) {
  return (
    <>
      <InitiativeModal
        size='m'
        controls={controls}>
        <InitiativeModalHeader
          title={initiative.title}
          date={initiative.dateOfCreation}
        />

        <div className={styles.description}>
          <h4>Описание проекта</h4>
          <p>{initiative.description}</p>
        </div>

        <div className={styles.searching}>
          <h4>Кто нужен в команду</h4>
          <p>{initiative.searching}</p>
        </div>
      </InitiativeModal>
    </>
  );
}

import InitiativeModal from "../InitiativeModal";
import InitiativeModalHeader from "../initiative-modal-header/InitiativeModalHeader";
import styles from "./initiative-modal-details.module.scss";

interface ResumeModalDetailsProps {
  initiative: Initiative;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function ResumeModalDetails({
  initiative,
  onCancel,
  onSubmit,
}: ResumeModalDetailsProps) {
  const controls = {
    cancelText: "Назад",
    submitText: "Получить контакт",
    onCancel,
    onSubmit,
  };

  return (
    <>
      <InitiativeModal size="m" controls={controls}>
        <InitiativeModalHeader
          title={initiative.author}
          date={initiative.dateOfCreation}
        />

        <div className={styles.description}>
          <h4>Описание навыков</h4>
          <p style={{ whiteSpace: "pre-line" }}>{initiative.description}</p>
        </div>

        <div className={styles.searching}>
          <h4>Какие иницивы ищу</h4>
          <p style={{ whiteSpace: "pre-line" }}>{initiative.searching}</p>
        </div>
      </InitiativeModal>
    </>
  );
}

import Image from "next/image";
import Modal from "../../../../modal/Modal";

import styles from "./initiative-modal-propose-sent.module.scss";
import { useCustomSelector } from "../../../../../../redux/customHooks/useCustomSelector";

interface InitiativeModalProposeSentProps {
  onSubmit: () => void;
}

export default function InitiativeModalProposeSent({
  onSubmit,
}: InitiativeModalProposeSentProps) {
  const Check = useCustomSelector((state) => state.chekout);

  return (
    <>
      <>
        <Modal size="s">
          <div className={styles.container}>
            <Image
              src="/initiatives/tick.svg"
              alt={"Successful sent icon."}
              width={109}
              height={109}
            />

            <h3 className={styles.message}>
              {!Check ? <>Инициатива была</> : <>Анкета была</>}
              <span>успешно отправлена</span>
            </h3>

            <div className={styles.line}></div>

            <button className={styles.back} onClick={onSubmit}>
              Вернуться
            </button>
          </div>
        </Modal>
      </>
    </>
  );
}

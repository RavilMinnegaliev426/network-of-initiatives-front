import Image from 'next/image';
import Modal from '../../../../modal/Modal';

import styles from './initiative-modal-form-sent.module.scss';

export default function InitiativeModalFormSent() {
  return (
    <>
      <Modal size='s'>
        <div className={styles.container}>
          <Image
            src='/tick.svg'
            alt={'Successful sent icon.'}
            width={109}
            height={109}
          />

          <h3 className={styles.message}>
            Заявка была<span>успешно отправлена</span>
          </h3>

          <div className={styles.line}></div>

          <button className={styles.back}>Вернуться</button>
        </div>
      </Modal>
    </>
  );
}

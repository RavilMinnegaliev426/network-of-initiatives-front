import { useState } from 'react';
import InputField from '../../../inputfield/InputField';
import InitiativeModalHeader from '../initiative-modal-header/InitiativeModalHeader';

import styles from './initiative-modal-form.module.scss';
import Textarea from '../../../textarea/Textarea';
import Modal from '../../../modal/Modal';

export default function InitiativeModalForm(initiative: Initiative) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');

  return (
    <>
      <Modal
        cancelText='Вернуться назад'
        continueText='Оставить заявку'
        onCancel={() => console.log('ok')}
        onContinue={() => console.log('ok')}>
        <form action='#'>
          <InitiativeModalHeader
            title={initiative.title}
            date={initiative.dateOfCreation}
            className={styles.header}
          />

          <div className={styles.fields}>
            <div className={styles.firstLine}>
              <InputField
                name='name'
                label='Имя'
                placeholder='Иван'
                value={name}
                onChange={setName}
              />

              <InputField
                name='lastname'
                label='Фамилия'
                placeholder='Иванов'
                value={surname}
                onChange={setSurname}
              />
            </div>

            <Textarea
              name='about'
              label='О себе'
              placeholder='Пару слов обо мне...'
              value={about}
              rows={7}
              onChange={setAbout}
            />

            <InputField
              name='contact'
              label='Контакт для связи'
              placeholder='Телеграм, почта или номер телефона'
              value={contact}
              onChange={setContact}
            />

            <Textarea
              name='comment'
              label='Комментарий для инициатора'
              placeholder='Любой комментарий'
              value={comment}
              rows={3}
              onChange={setComment}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

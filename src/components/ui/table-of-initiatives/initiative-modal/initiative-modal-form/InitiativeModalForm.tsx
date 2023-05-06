import { useState } from 'react';
import InputField from '../../../inputfield/InputField';
import InitiativeModal from '../InitiativeModal';
import InitiativeModalHeader from '../initiative-modal-header/InitiativeModalHeader';

import styles from './initiative-modal-form.module.scss';
import Textarea from '../../../textarea/Textarea';
import { postApplication } from '../../../../lib/postApplication';

interface InitiativeModalFormProps {
  initiative: Initiative;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function InitiativeModalForm({
  initiative,
  onCancel,
  onSubmit,
}: InitiativeModalFormProps) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [contact, setContact] = useState('');
  const [about, setAbout] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!(name && lastname && contact && about && message)) return;

    const isPosted = await postApplication({
      initiativeID: initiative.id,
      name: name + ' ' + lastname,
      about,
      contact,
      message,
    });

    if (isPosted) {
      onSubmit();
    }
  };

  const controls = {
    cancelText: 'Назад',
    submitText: 'Отправить заявку',
    onCancel,
    onSubmit: handleSubmit,
  };

  return (
    <>
      <InitiativeModal
        size='s'
        controls={controls}>
        <InitiativeModalHeader
          title={initiative.title}
          date={initiative.dateOfCreation}
        />

        <form
          className={styles.form}
          action='#'>
          <div className={styles.firstRow}>
            <InputField
              label='Имя'
              name='name'
              value={name}
              onChange={setName}
              placeholder='Иван'
            />

            <InputField
              label='Фамилия'
              name='lastname'
              value={lastname}
              onChange={setLastname}
              placeholder='Иванов'
            />
          </div>

          <InputField
            label='Контактная информация'
            name='contact'
            value={contact}
            onChange={setContact}
            placeholder='Почтовый адрес, телеграм или номер телефона'
          />

          <Textarea
            label='Кратко о себе'
            name='about'
            rows={6}
            value={about}
            onChange={setAbout}
            placeholder='Расскажите пару слов о себе'
          />

          <Textarea
            label='Сообщение автору'
            name='message'
            rows={3}
            value={message}
            onChange={setMessage}
            placeholder='Почему вы заинтересованы в участии в этом проекте и какую роль можете сыграть?'
          />
        </form>
      </InitiativeModal>
    </>
  );
}

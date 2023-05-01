import { useState } from 'react';
import InitiativeModal from '../InitiativeModal';
import styles from './initiative-modal-propose.module.scss';
import InputField from '../../../inputfield/InputField';
import Textarea from '../../../textarea/Textarea';

interface InitiativeModalProposeProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export default function InitiativeModalPropose({
  onCancel,
  onSubmit,
}: InitiativeModalProposeProps) {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [searching, setSearching] = useState('');
  const [contact, setContact] = useState('');

  const controls = {
    cancelText: 'Назад',
    submitText: 'Отправить инициативу',
    onCancel,
    onSubmit,
  };

  return (
    <>
      <InitiativeModal
        size='m'
        controls={controls}>
        <h3 className={styles.title}>Создание инициативы</h3>

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
            label='Название инициативы'
            name='title'
            value={title}
            onChange={setTitle}
            placeholder='Ваше название инициативы'
          />

          <Textarea
            label='Описание инициативы'
            name='description'
            rows={5}
            value={description}
            onChange={setDescription}
            placeholder='Расскажите о своей инициативе'
          />

          <Textarea
            label='Кого вы ищете'
            name='message'
            rows={3}
            value={searching}
            onChange={setSearching}
            placeholder='Опишите человека или команду, которую вы ищете'
          />

          <InputField
            label='Контактная информация'
            name='contact'
            value={contact}
            onChange={setContact}
            placeholder='Почтовый адрес, телеграм или номер телефона'
          />
        </form>
      </InitiativeModal>
    </>
  );
}

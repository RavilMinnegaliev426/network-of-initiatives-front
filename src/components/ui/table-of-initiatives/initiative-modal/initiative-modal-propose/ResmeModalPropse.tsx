import { useState } from "react";
import InitiativeModal from "../InitiativeModal";
import styles from "./initiative-modal-propose.module.scss";
import InputField from "../../../inputfield/InputField";
import Textarea from "../../../textarea/Textarea";
import { postInitiative } from "../../../../../lib/postInitiative";

interface InitiativeModalProposeProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export default function ResumeModalPropose({
  onCancel,
  onSubmit,
}: InitiativeModalProposeProps) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searching, setSearching] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async () => {
    console.log("damn");
    if (!(name && lastname && title && description && searching && contact))
      return;

    console.log("can try");

    const isPosted = await postInitiative({
      title,
      description,
      searching,
      contact,
      author: name + lastname,
    });

    if (isPosted) {
      onSubmit();
    }
  };

  const controls = {
    cancelText: "Назад",
    submitText: "Отправить Анкету",
    onCancel,
    onSubmit: handleSubmit,
  };

  return (
    <div className={styles.wrapper}>
      <InitiativeModal size="m" controls={controls}>
        <h3 className={styles.title}>Создание инициативы</h3>

        <form className={styles.form} action="#">
          <div className={styles.firstRow}>
            <InputField
              label="Имя"
              name="name"
              value={name}
              onChange={setName}
              placeholder="Иван"
            />

            <InputField
              label="Фамилия"
              name="lastname"
              value={lastname}
              onChange={setLastname}
              placeholder="Иванов"
            />
          </div>

          <InputField
            label="Цитата для анкеты"
            name="title"
            value={title}
            onChange={setTitle}
            placeholder="Люблю котлетки и JS"
          />

          <Textarea
            label="Описание Навыков"
            name="description"
            rows={5}
            value={description}
            onChange={setDescription}
            placeholder="Расскажите о своих навыках"
          />

          <Textarea
            label="Какие инициативы ищите"
            name="message"
            rows={3}
            value={searching}
            onChange={setSearching}
            placeholder="Опишите в каких проектах вы бы учавствовали"
          />

          <InputField
            label="Контактная информация"
            name="contact"
            value={contact}
            onChange={setContact}
            placeholder="Почтовый адрес, телеграм или номер телефона"
          />
        </form>
      </InitiativeModal>
    </div>
  );
}

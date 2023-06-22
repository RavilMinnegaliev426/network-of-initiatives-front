import s from "./answer.module.scss";
import { SvgSelector } from "../../../shared/SvgSelector";
type Props = {};

export const Answer = (props: Props) => {
  return (
    <div className={s.container}>
      <div className={s.textAnswer}>
        Если у вас возникли вопросы или затруднения при использовании нашей
        платформы, мы всегда готовы помочь. Вы можете связаться с нашим
        модератором в официальном чате и получить ответы на все свои вопросы.
        Кроме того, если у вас есть идеи по улучшению платформы или вы хотите
        сообщить о проблемах с ее работой, вы можете связаться с нами через чат
        или электронную почту. Мы обязуемся решить все ваши проблемы и улучшить
        работу нашей платформы.
      </div>
      <div className={s.imgWrapper}>
        <div className={s.telegram}>
          <SvgSelector id={"telegram"} />
          <a href="https://t.me/initiative_network">@initiative_network</a>
        </div>
      </div>
    </div>
  );
};

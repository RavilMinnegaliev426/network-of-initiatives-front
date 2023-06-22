type Props = {};
import s from "./Header.module.scss";
export const Header = (props: Props) => {
  return (
    <div className={s.headerContainer}>
      <div className={s.headerLogo}>
        <div className={s.imageWrapper}>
          <img src="/initiatives/logo1.svg" />
        </div>
        <div className={s.wrapperTextLogo}>
          <div>Сеть </div>
          <div className={s.blueText}>Инициатив</div>
        </div>
      </div>
      <nav className={s.headerNav}>
        <ul>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Инициативы</a>
          </li>
          <li>
            <a href="#">Сообщество</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

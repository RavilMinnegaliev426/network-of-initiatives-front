type Props = {};
import s from "./Header.module.scss";
export const Header = (props: Props) => {
  return (
    <div className={s.headerContainer}>
      <div className={s.headerLogo}>
        <div className={s.imageWrapper}>
          <img className={s.headeImage} src="/initiatives/logo1.svg" />
        </div>
        <div className={s.wrapperTextLogo}>
          <div>Сеть </div>
          <div className={s.blueText}>Инициатив</div>
        </div>
      </div>
    </div>
  );
};

import s from "./header-text.module.scss";
type Props = {};

export const HeaderText = (props: Props) => {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.initiativesHead}>ИНИЦИАТИВЫ</h2>
        <div className={s.initiativesText}>
          <p>
            Инициатива — почин, принятие человеком самостоятельного решения,
            форма проявления его общественной активности. Инициатива
            определяется как аксиоматическое обозначение признака
            несимметричности взаимодействия живого объекта с произвольными
            объектами.
          </p>
        </div>
      </div>
    </div>
  );
};

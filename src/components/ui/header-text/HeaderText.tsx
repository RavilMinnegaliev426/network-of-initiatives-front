import s from "./header-text.module.scss";
type Props = {};

export const HeaderText = (props: Props) => {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.initiativesHead}>Сеть инициатив</h2>
        <div className={s.initiativesText}>
          <div>
            <div>
              <p>
                Платформа для роста команд и проектов. Здесь вы можете:
                опубликовать свою идею присоединиться к опубликованному проекту
                Присоединяйтесь к нашему сообществу
                <a
                  className={s.textLink}
                  href="https://t.me/initiative_network"
                >
                  @initiative_network
                </a>
                , чтобы узнавать о новом функционале, быть на связи с
                разработчиками и общаться с другими такими же активными
                деятелями
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

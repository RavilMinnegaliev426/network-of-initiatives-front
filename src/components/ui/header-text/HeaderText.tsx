import s from "./header-text.module.scss";
type Props = {};

export const HeaderText = (props: Props) => {
  return (
    <div className={s.container}>
      <div>
        <h1 className={s.initiativesHead}>Сеть инициатив</h1>
        <div className={s.initiativesText}>
          <div>
            <div>
              <div>
                <p>Платформа для роста команд и проектов. Здесь вы можете: </p>
                <ul>
                  <li>опубликовать свою идею</li>
                  <li>присоединиться к опубликованному проекту</li>
                </ul>
                <p>
                  Присоединяйтесь к нашему сообществу{" "}
                  <a
                    className={s.textLink}
                    href="https://t.me/initiative_network"
                  >
                    @initiative_network
                  </a>
                  , чтобы узнавать о новом функционале,быть на связи с
                  разработчиками и общаться с другими такими же активными
                  деятелями
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

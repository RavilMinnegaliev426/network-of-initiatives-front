import InitiativeSection from '../components/ui/sections/initiatives-section/InitiativeSection';
export default function Home() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        <div>
          <h1>Сеть инициатив</h1>
          <p>Платформа для роста команд и проектов. Здесь вы можете: </p>
          <ul style={{ listStyle: 'none' }}>
            <li>опубликовать свою идею</li>
            <li>присоединиться к опубликованному проекту</li>
          </ul>
          <p>
            Присоединяйтесь к нашему сообществу{' '}
            <a href='https://t.me/initiative_network'>@initiative_network</a>,
            чтобы узнавать о новом функционале, быть на связи с разработчиками и
            общаться с другими такими же активными деятелями
          </p>
        </div>
      </div>

      <InitiativeSection />
    </>
  );
}

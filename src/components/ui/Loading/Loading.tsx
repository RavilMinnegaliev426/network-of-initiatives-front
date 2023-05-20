import styles from './loading.module.scss';

export default function Loading() {
  return (
    <>
      <div className={styles.loading}>
        <h1>Идёт загрузка инициатив</h1>
        <h2>Это может занять пару секунд</h2>
      </div>
    </>
  );
}

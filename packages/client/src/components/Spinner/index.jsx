import styles from './index.module.css';

export default function Spinner() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader} />
    </div>
  );
}

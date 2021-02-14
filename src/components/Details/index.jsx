import styles from './index.module.css';

export default function Details({ title }) {
  return (
    <div className={styles.details}>{title}</div>
  );
}

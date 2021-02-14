import styles from './index.module.css';

export default function Details({ filename }) {
  return (
    <div className={styles.details}>{filename}</div>
  );
}

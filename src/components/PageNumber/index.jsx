import styles from './index.module.css';

export default function PageNumber({ number }) {
  return <div className={styles.pageNumber}>{number}</div>;
}

import styles from './index.module.css';

export default function Details({ data }) {
  const { title, director, writer, year, genre } = data;
  return (
    <div className={styles.details}>
      <div>
        <div className={styles.label}>Title</div>
        <div className={styles.detail}>{title}</div>
      </div>
      <div>
        <div className={styles.label}>Director</div>
        <div className={styles.detail}>{director.join(', ')}</div>
      </div>
      <div>
        <div className={styles.label}>Writer</div>
        <div className={styles.detail}>{writer.join(', ')}</div>
      </div>
      <div>
        <div className={styles.label}>Year</div>
        <div className={styles.detail}>{year}</div>
      </div>
      <div>
        <div className={styles.label}>Genre</div>
        <div className={styles.detail}>{genre.join(', ')}</div>
      </div>
    </div>
  );
}

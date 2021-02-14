import styles from './index.module.css';

export default function Spot({ rgbData }) {

  return (
    <div
      className={styles.spot}
      style={{ backgroundColor: `rgba(${rgbData}, 255)` }}
    />
  );

}

import { useEffect } from 'react';
import Spot from '../Spot';
import styles from './index.module.css';

export default function Spotmap({ data }) {

  useEffect(() => {
    const { minutes } = data;
    document.documentElement.style.setProperty('--minutes', `${minutes}`);
  });

  return (
    <div className={styles.spotmap}>
      <Spot />
    </div>
  );
}

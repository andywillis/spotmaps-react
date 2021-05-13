import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../store/context';

import styles from './index.module.css';

function formatItems(type, list) {
  return list.map((value) => {
    const link = `/${type}/${value}`;
    return (
      <Link className={styles.wrapper} to={link}>
        <div className={styles.link}>
          {value}
        </div>
      </Link>
    );
  });
}


export default function List({ type }) {

  const { state: { [type]: list } } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      {formatItems(type, list)}
    </div>
  );

}

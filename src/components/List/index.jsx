import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../store/context';

import styles from './index.module.css';

function formatItems(type, list) {
  return list.map((item, i) => {
    const link = `/${type}/${item}`;
    return (

      // eslint-disable-next-line
      <Link key={i} className={styles.wrapper} to={link}>
        <div className={styles.link}>
          {item}
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

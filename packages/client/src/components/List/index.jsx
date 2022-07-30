import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../store/context';

import styles from './index.module.css';

function formatItems(type, list) {
  return list.map((value) => {
    const link = `/${type}/${value}`;
    return (
      <Link key={value} className={styles.wrapper} to={link}>
        <div className={styles.link}>
          {value}
        </div>
      </Link>
    );
  });
}

function List({ type, group }) {

  const { state: { [group]: list } } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      {formatItems(type, list)}
    </div>
  );

}

export default List;

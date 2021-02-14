import { useContext } from 'react';

import PageNumber from '../PageNumber';
import RWD from '../RWD';
import FFD from '../FFD';

import AppContext from '../../store/context';

import styles from './index.module.css';

function buildPageList({ page, numberOfPages }) {

  const pages = [];

  let start = 0;
  let end = 0;

  if (page < 3) {
    start = 1;
    end = 5;
  } else {
    start = page - 2;
    end = page + 2;
    if (page > (numberOfPages - 3)) {
      start = numberOfPages - 4;
      end = numberOfPages;
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(<PageNumber page={page} key={i} number={i} />);
  }

  return pages;

}

export default function PageNumbers() {

  const { state, dispatch } = useContext(AppContext);
  const { page, numberOfPages } = state;

  function handleClick(e) {

    const { disabled, dataset: { number, id } } = e.target;

    if (id) {
      switch (id) {
        case 'number': {
          dispatch({ type: 'setPage', payload: parseInt(number, 10) });
          break;
        }
        case 'RWD': {
          if (!disabled) dispatch({ type: 'RWD' });
          break;
        }
        case 'FFD': {
          if (!disabled) dispatch({ type: 'FFD' });
          break;
        }
        default: break;
      }

    }
  }

  return (
    <>
      <div role="presentation" className={styles.pageNumbers} onClick={handleClick}>
        <RWD page={page} />
        {numberOfPages > 1 ? buildPageList({ page, numberOfPages }) : null}
        <FFD page={page} numberOfPages={numberOfPages} />
      </div>
    </>
  );

}

import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { useContext } from 'react';

import PageNumber from './PageNumber';
import Directional from './Directional';

import { pageAtom, numberOfPagesAtom } from '../../store/atoms';

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

  const page = useRecoilValue(pageAtom);
  const setPage = useSetRecoilState(pageAtom);
  const numberOfPages = useRecoilValue(numberOfPagesAtom);

  function handleClick(e) {

    const { dataset: { disabled, number, id } } = e.target;

    const isDisabled = disabled === 'true';

    if (id) {
      switch (id) {
        case 'number': {
          setPage(parseInt(number, 10));
          break;
        }
        case 'rwd': {
          if (!isDisabled) setPage(1);
          break;
        }
        case 'previous': {
          if (!isDisabled) setPage(page - 1);
          break;
        }
        case 'next': {
          if (!isDisabled) setPage(page + 1);
          break;
        }
        case 'ffd': {
          if (!isDisabled) setPage(numberOfPages);
          break;
        }
        default: break;
      }

    }
  }

  return (
    <nav role="presentation" className={styles.pageNumbers} onClick={handleClick}>
      <Directional type="rwd" page={page} />
      <Directional type="previous" page={page} numberOfPages={numberOfPages} />
      {numberOfPages > 1 ? buildPageList({ page, numberOfPages }) : null}
      <Directional type="next" page={page} numberOfPages={numberOfPages} />
      <Directional type="ffd" page={page} numberOfPages={numberOfPages} />
    </nav>
  );

}

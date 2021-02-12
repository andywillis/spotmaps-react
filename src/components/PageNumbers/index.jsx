import { useContext } from 'react';
import AppContext from '../../store/context';
import PageNumber from '../PageNumber';

import styles from './index.module.css';

function buildPageList(numberOfPages) {
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(<PageNumber key={i} number={i} />);
  }
  return pages;
}

export default function PageNumbers() {
  const state = useContext(AppContext);
  const numberOfSpotmaps = state.length;
  const numberOfPages = Math.floor(numberOfSpotmaps / 5) + (numberOfSpotmaps % 5);
  return (
    <div className={styles.pageNumbers}>
      {numberOfPages > 1 ? buildPageList(numberOfPages) : null}
    </div>
  );
}

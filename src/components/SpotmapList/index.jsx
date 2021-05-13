import { useContext, useEffect, useRef } from 'react';

import classNames from 'classnames';

import SpotmapContainer from '../SpotmapContainer';
import AppContext from '../../store/context';

import useWindowResize from '../../hooks/useWindowResize';

import styles from './index.module.css';

export default function SpotmapList() {

  const windowSize = useWindowResize();

  const mainRef = useRef(null);

  const {
    state: { page, limit, library, mainWidth },
    dispatch
  } = useContext(AppContext);

  const data = library.slice((page - 1) * limit, (page * limit));

  useEffect(() => {
    const bound = mainRef.current.getBoundingClientRect();
    dispatch({ type: 'setMainWidth', payload: Math.floor(bound.width) });
  }, [windowSize.width, dispatch]);

  const classes = classNames({
    [styles.spotmapList]: true,
    [styles.visible]: mainWidth > 0,
    [styles.fadeInContainer]: mainWidth > 0
  });

  return (
    <div ref={mainRef} className={classes}>
      {data.map((spotmapData, i) => {

        // eslint-disable-next-line react/no-array-index-key
        return <SpotmapContainer key={i} data={spotmapData} />;
      })};
    </div>
  );

}

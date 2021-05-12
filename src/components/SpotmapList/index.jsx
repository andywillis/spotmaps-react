import { useContext, useEffect, useRef } from 'react';

import classNames from 'classnames';

import SpotmapContainer from '../SpotmapContainer';

import AppContext from '../../store/context';

import styles from './index.module.css';

export default function SpotmapList() {

  const mainRef = useRef(null);

  const {
    state: { page, limit, library, mainWidth }, dispatch
  } = useContext(AppContext);

  const data = library.slice((page - 1) * limit, (page * limit));

  useEffect(() => {
    setInterval(() => {
      if (mainRef.current) {
        const bound = mainRef.current.getBoundingClientRect();
        if (bound.width !== mainWidth) {
          dispatch({ type: 'setMainWidth', payload: Math.floor(bound.width) });
        }
      }
    }, 1000);
  }, []);

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

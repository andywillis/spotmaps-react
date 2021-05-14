import { useContext, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import classNames from 'classnames';

import SpotmapContainer from '../SpotmapContainer';
import AppContext from '../../store/context';

import useWindowResize from '../../hooks/useWindowResize';

import styles from './index.module.css';

function wrangleData({ library, page, limit, title }) {
  if (title) return library.filter((spotmap) => spotmap.title === title);
  return library.slice((page - 1) * limit, (page * limit));
}

function SpotmapList(props) {

  const windowSize = useWindowResize();
  const mainRef = useRef(null);

  const {
    state: { page, limit, library, mainWidth },
    dispatch
  } = useContext(AppContext);

  const { match: { params: { title } } } = props;
  const data = wrangleData({ library, page, limit, title });

  // useEffect(() => {
  //   if (mainRef && mainRef.current) {
  //     mainRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);

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
      {data.map((spotmapData) => {
        const { id } = spotmapData;
        return <SpotmapContainer key={id} data={spotmapData} />;
      })}
    </div>
  );

}

export default withRouter(SpotmapList);

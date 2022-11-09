import { useEffect, useRef } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import SpotmapContainer from '../SpotmapContainer';

import useWindowResize from '../../hooks/useWindowResize';

import { mainWidthAtom } from '../../store/atoms';
import { spotmapsSelector } from '../../store/selectors';
import { spotmapsDataQuery } from '../../store/queries';

import styles from './index.module.css';

function SpotmapList() {

  const windowSize = useWindowResize();
  const mainRef = useRef(null);

  const { path: type, value } = useParams();

  const mainWidth = useRecoilValue(mainWidthAtom);

  const setMainWidth = useSetRecoilState(mainWidthAtom);
  const filteredData = useRecoilValue(spotmapsSelector({ type, value }));
  const { state, contents } = useRecoilValueLoadable(spotmapsDataQuery(filteredData));

  useEffect(() => {
    const bound = mainRef.current.getBoundingClientRect();
    setMainWidth(Math.floor(bound.width));
  }, [ windowSize.width, setMainWidth ]);

  const classes = classNames({
    [styles.spotmapList]: true,
    [styles.visible]: mainWidth > 0,
    [styles.fadeOutContainer]: state === 'loading' && mainWidth > 0,
    [styles.fadeInContainer]: state === 'hasValue' && mainWidth > 0
  });

  return (
    <div ref={mainRef} className={classes}>
      {state === 'hasValue' && contents.length ? contents.map(data => {
        const { id } = data;
        return <SpotmapContainer key={id} data={data} />;
      }) : <Spinner />}
    </div>
  );

}

export default SpotmapList;

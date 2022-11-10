import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import {
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState
} from 'recoil';

import Spinner from '../Spinner';
import SpotmapContainer from '../SpotmapContainer';
import PageNumbers from '../PageNumbers';

import useWindowResize from '../../hooks/useWindowResize';

import {
  mainWidthAtom, numberOfFilteredPagesAtom
} from '../../store/atoms';

import { spotmapsSelector } from '../../store/selectors';
import { spotmapsDataQuery } from '../../store/queries';

import styles from './index.module.css';

/**
 * SpotmapList
 *
 * @return {object} JSX
 */
function SpotmapList() {

  const windowSize = useWindowResize();
  const mainRef = useRef(null);

  const { type, value } = useParams();

  const mainWidth = useRecoilValue(mainWidthAtom);

  const setMainWidth = useSetRecoilState(mainWidthAtom);
  const filteredData = useRecoilValue(spotmapsSelector({ type, value }));
  const setNumberOfFilteredPages = useSetRecoilState(numberOfFilteredPagesAtom);
  const resetNumberOfFilteredPages = useResetRecoilState(numberOfFilteredPagesAtom);

  const { state, contents } = useRecoilValueLoadable(spotmapsDataQuery(filteredData));

  useEffect(() => {
    const bound = mainRef.current.getBoundingClientRect();
    setMainWidth(Math.floor(bound.width));
  }, [ windowSize.width, setMainWidth ]);

  useEffect(() => {
    if (!type && !value) {
      resetNumberOfFilteredPages();
    } else {
      setNumberOfFilteredPages(filteredData.length);
    }
  }, [
    type,
    value,
    filteredData,
    setNumberOfFilteredPages,
    resetNumberOfFilteredPages
  ]);

  const spotmapConteinerStyle = classNames({
    [styles.spotmapList]: true,
    [styles.visible]: mainWidth > 0,
    [styles.fadeOutContainer]: state === 'loading' && mainWidth > 0,
    [styles.fadeInContainer]: state === 'hasValue' && mainWidth > 0
  });

  return (
    <>
      <PageNumbers />
      <div ref={mainRef} className={spotmapConteinerStyle}>
        {state === 'hasValue' && contents.length ? contents.map(data => {
          const { id } = data;
          return <SpotmapContainer key={id} data={data} />;
        }) : <Spinner />}
      </div>
    </>
  );

}

export default SpotmapList;

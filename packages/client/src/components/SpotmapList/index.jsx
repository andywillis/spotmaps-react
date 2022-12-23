import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import {
  useRecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState
} from 'recoil';

import Spinner from '../Spinner';
import SpotmapContainer from '../SpotmapContainer';
import PageNumbers from '../PageNumbers';

import useWindowResize from '../../hooks/useWindowResize';

import {
  mainWidthAtom, numberOfPagesAtom, limitAtom, pageAtom
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

  const [ mainWidth, setMainWidth ] = useRecoilState(mainWidthAtom);
  const [ page, setPage ] = useRecoilState(pageAtom);

  const limit = useRecoilValue(limitAtom);

  const filteredData = useRecoilValue(spotmapsSelector({ type, value }));
  const setNumberOfPages = useSetRecoilState(numberOfPagesAtom);
  const spotmaps = filteredData.slice((page - 1) * limit, (page * limit));

  const { state, contents } = useRecoilValueLoadable(spotmapsDataQuery(spotmaps));

  useEffect(() => {
    const bound = mainRef.current.getBoundingClientRect();
    setMainWidth(Math.floor(bound.width));
  }, [ windowSize.width, setMainWidth ]);

  useEffect(() => {
    setNumberOfPages(filteredData.length);
    setPage(1);
  }, [ filteredData, setPage, setNumberOfPages ]);

  const spotmapContainerStyle = classNames({
    [styles.spotmapList]: true,
    [styles.visible]: mainWidth > 0,
    [styles.fadeOutContainer]: state === 'loading' && mainWidth > 0,
    [styles.fadeInContainer]: state === 'hasValue' && mainWidth > 0
  });

  return (
    <>
      <PageNumbers />
      <div ref={mainRef} className={spotmapContainerStyle}>
        {state === 'hasValue' && contents.length
          ? (
            contents.map(data => {
              return (
                <SpotmapContainer
                  key={data.id}
                  data={data}
                />
              );
            })
          ) : <Spinner />}
      </div>
    </>
  );

}

export default SpotmapList;

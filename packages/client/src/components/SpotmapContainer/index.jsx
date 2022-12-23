import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import { mainWidthAtom } from '../../store/atoms';

import styles from './index.module.css';

/**
 * SpotmapContainer
 *
 * @param {object} props
 * @return {object} JSX
 */
function SpotmapContainer(props) {

  const { data: { hexData, numberOfSpots, ...details } } = props;

  const containerRef = useRef(null);

  const mainWidth = useRecoilValue(mainWidthAtom);

  return (
    <section
      className={styles.spotmapContainer}
      style={{ width: mainWidth }}
      ref={containerRef}
    >
      <Details
        containerRef={containerRef}
        mainWidth={mainWidth}
        data={details}
      />
      <SpotmapCanvas
        mainWidth={mainWidth}
        numberOfSpots={numberOfSpots}
        hexData={hexData}
      />
    </section>
  );
}

export default SpotmapContainer;

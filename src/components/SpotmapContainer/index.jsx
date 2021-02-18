import { useContext } from 'react';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import AppContext from '../../store/context';

import styles from './index.module.css';

export default function SpotmapContainer({ data }) {

  const { state: { mainWidth } } = useContext(AppContext);
  const { hexData, numberOfSpots, ...details } = data;

  return (
    <section className={styles.spotmapContainer} style={{ width: mainWidth }}>
      <Details mainWidth={mainWidth} data={details} />
      <SpotmapCanvas
        mainWidth={mainWidth}
        numberOfSpots={numberOfSpots}
        hexData={hexData}
      />
    </section>
  );
}

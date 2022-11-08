import { useContext } from 'react';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import AppContext from '../../store/context';

import styles from './index.module.css';

function SpotmapContainer(props) {

  const { state: { mainWidth } } = useContext(AppContext);
  const { data: { hexData, numberOfSpots, ...details } } = props;

  function handleAseDownload(filename) {
    console.log(filename);
  }

  return (
    <section className={styles.spotmapContainer} style={{ width: mainWidth }}>
      <Details
        mainWidth={mainWidth}
        data={details}
        handleAseDownload={handleAseDownload}
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

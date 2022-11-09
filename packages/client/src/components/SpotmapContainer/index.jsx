import { useRecoilValue } from 'recoil';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import { mainWidthAtom } from '../../store/atoms';

import styles from './index.module.css';

function SpotmapContainer(props) {

  const { data: { hexData, numberOfSpots, ...details } } = props;

  const mainWidth = useRecoilValue(mainWidthAtom);

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

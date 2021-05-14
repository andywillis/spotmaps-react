import { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import Details from '../Details';
import SpotmapCanvas from '../SpotmapCanvas';

import AppContext from '../../store/context';

import styles from './index.module.css';

function SpotmapContainer(props) {

  const { state: { mainWidth } } = useContext(AppContext);
  const { data: { hexData, numberOfSpots, ...details } } = props;

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

export default withRouter(SpotmapContainer);

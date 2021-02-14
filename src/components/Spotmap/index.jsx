import { useEffect } from 'react';

import Spot from '../Spot';
import Details from '../Details';

import styles from './index.module.css';

function buildSpotmap({ hexData }) {
  const spotmap = [];
  for (let i = 0; i < hexData.length; i+=6) {
    spotmap.push(
      <Spot
        key={i}
        rgbData={[
          parseInt(hexData.slice(i, i+2), 16),
          parseInt(hexData.slice(i+2, i+4), 16),
          parseInt(hexData.slice(i+4, i+6), 16)
        ]}
      />
    );
  }
  return spotmap;
}

export default function Spotmap({ data }) {

  const { title, minutes, hexData } = data;
  console.log(data)

  useEffect(() => {
    document.documentElement.style.setProperty('--minutes', `${minutes}`);
  }, [minutes]);

  return (
    <section>
      <Details title={title} />
      <section className={styles.spotmap}>
        {buildSpotmap({ hexData })}
      </section>
    </section>
  );

}

import { useContext } from 'react';

import Spotmap from '../Spotmap';
// import SpotmapCanvas from '../SpotmapCanvas';

import AppContext from '../../store/context';

export default function SpotmapList() {

  const { state: { page, limit, library } } = useContext(AppContext);
  const data = library.slice((page - 1) * limit, (page * limit));

  return data.map((spotmapData, i) => {

    // return <SpotmapCanvas key={i} data={spotmapData} />;
    // eslint-disable-next-line react/no-array-index-key
    return <Spotmap key={i} data={spotmapData} />;
  });

}

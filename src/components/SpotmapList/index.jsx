import { useContext } from 'react';

import SpotmapContainer from '../SpotmapContainer';

import AppContext from '../../store/context';

export default function SpotmapList() {

  const { state: { page, limit, library } } = useContext(AppContext);

  const data = library.slice((page - 1) * limit, (page * limit));

  return data.map((spotmapData, i) => {

    // eslint-disable-next-line react/no-array-index-key
    return <SpotmapContainer key={i} data={spotmapData} />;
  });

}

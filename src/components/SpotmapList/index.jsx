import { useContext } from 'react';

import Spotmap from '../Spotmap';

import AppContext from '../../store/context';

export default function SpotmapList() {
  const { state: { library } } = useContext(AppContext);
  const spotmapData = library['Die Hard With A Vengeance'];
  return <Spotmap data={spotmapData} />;
}

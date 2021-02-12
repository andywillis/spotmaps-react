import { useContext } from 'react';
import AppContext from '../../store/context';

export default function PageNumber() {
  const state = useContext(AppContext);
  console.log(state);
  return 'pn';
}

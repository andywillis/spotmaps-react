import { useContext, useEffect, useRef } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import classNames from 'classnames';

import SpotmapContainer from '../SpotmapContainer';
import AppContext from '../../store/context';

import useWindowResize from '../../hooks/useWindowResize';

import styles from './index.module.css';

// function convertValue(path, value) {
//   if (path === 'year') return +value;
//   return value;
// }

// function wrangleData({ library, page, limit, path, value }) {
//   if (path && value) {
//     if ([ 'director', 'genre', 'writer' ].includes(path)) {
//       return library.filter((spotmap) => {
//         return spotmap[path].includes(value);
//       });
//     }
//     return library.filter((spotmap) => {
//       return spotmap[path] === convertValue(path, value);
//     });
//   }
//   return library.slice((page - 1) * limit, (page * limit));
// }

function SpotmapList() {

  const windowSize = useWindowResize();
  const mainRef = useRef(null);
  const location = useLocation();
  // const match = useMatch(location);
  console.log(location);
  // const { params: { path, value } } = useMatch();

  // const {
  //   state: { page, limit, library, mainWidth },
  //   dispatch
  // } = useContext(AppContext);

  // const { match: { params: { path, value } } } = props;

  // const data = wrangleData({ library, page, limit, path, value });

  // useEffect(() => {
  //   const bound = mainRef.current.getBoundingClientRect();
  //   dispatch({ type: 'setMainWidth', payload: Math.floor(bound.width) });
  // }, [ windowSize.width, dispatch ]);

  // const classes = classNames({
  //   [styles.spotmapList]: true,
  //   [styles.visible]: mainWidth > 0,
  //   [styles.fadeInContainer]: mainWidth > 0
  // });

  return (
    <div>Hallo</div>
    // <div ref={mainRef} className={classes}>
    //   {data.map((spotmapData) => {
    //     const { id } = spotmapData;
    //     return <SpotmapContainer key={id} data={spotmapData} />;
    //   })}
    // </div>
  );

}

export default SpotmapList;
// export default withRouter(SpotmapList);

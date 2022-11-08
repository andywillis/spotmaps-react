import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

function ScrollToTop({ children }) {

  // const [ state, setState ] = useState();
  // const { pathname } = location;

  const { pathname } = useLocation();

  useEffect(() => {
    // if (pathname !== state) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // window.scrollIntoView({ block: 'start', behavior: 'smooth' });
    // setState(pathname);
    // }
  }, [ pathname ]);

  return children;

}

export default ScrollToTop;
// export default withRouter(ScrollToTop);

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ children, location }) {

  // const [ state, setState ] = useState();
  const { pathname } = location;

  useEffect(() => {
    // if (pathname !== state) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // window.scrollIntoView({ block: 'start', behavior: 'smooth' });
    // setState(pathname);
    // }
  }, [ pathname ]);

  return children;

}

export default withRouter(ScrollToTop);

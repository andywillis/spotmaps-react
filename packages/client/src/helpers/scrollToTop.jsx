import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ children, location }) {

  const [ state, setState ] = useState();
  const { pathname } = location;

  useEffect(() => {
    if (pathname !== state) {
      window.scrollTo(0, 0);
      setState(pathname);
    }
  }, [ pathname, state ]);

  return children;

}

export default withRouter(ScrollToTop);

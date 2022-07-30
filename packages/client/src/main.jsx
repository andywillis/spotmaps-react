import { lazy, Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './helpers/scrollToTop';
import AppProvider from './store/provider';
import Spinner from './components/Spinner';

import './main.css';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <Router>
        <ScrollToTop>
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        </ScrollToTop>
      </Router>
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);

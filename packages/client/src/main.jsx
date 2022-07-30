import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollToTop from './helpers/scrollToTop';

import AppProvider from './store/provider';

import './main.css';

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);

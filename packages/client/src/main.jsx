import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollTop from './helpers/ScrollTop';

import AppProvider from './store/provider';

import './main.css';

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <Router>
        <ScrollTop>
          <App />
        </ScrollTop>
      </Router>
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);

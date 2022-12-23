import React, { StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollTop from './components/ScrollTop';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <ScrollTop>
          <App />
        </ScrollTop>
      </Router>
    </RecoilRoot>
  </StrictMode>
);

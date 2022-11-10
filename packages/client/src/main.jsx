import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollTop from './components/ScrollTop';

import './index.css';

const root = document.getElementById('root');

ReactDOM
  .createRoot(root)
  .render(
    <RecoilRoot>
      <StrictMode>
        <Router>
          <ScrollTop>
            <App />
          </ScrollTop>
        </Router>
      </StrictMode>
    </RecoilRoot>
  );

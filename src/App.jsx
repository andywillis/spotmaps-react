import React from 'react';
import AppProvider from './store/provider';
import PageNumber from './components/PageNumber';
import styles from './App.module.css';

export default function App() {
  return (
    <AppProvider>
      <div className={styles.app}>
        <header>
          Hi
          <PageNumber />
        </header>
      </div>
    </AppProvider>
  );
}

import React from 'react';
import AppProvider from './store/provider';
import PageNumbers from './components/PageNumbers';

import styles from './App.module.css';

export default function App() {
  return (
    <AppProvider>
      <article className={styles.article}>
        <header className={styles.header}>
          <nav>
            <PageNumbers />
          </nav>
        </header>
        <main className={styles.main}>
          Content
        </main>
        <footer className={styles.footer}>
          &copy; Andy Willis 2021
        </footer>
      </article>
    </AppProvider>
  );
}

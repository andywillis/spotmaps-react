import React, { useEffect } from 'react';
import AppProvider from './store/provider';
import PageNumbers from './components/PageNumbers';
import Spotmap from './components/Spotmap';

import styles from './App.module.css';

export default function App() {

  useEffect(() => {
    async function getData() {
      const res = await fetch('/json');
      const data = await res.json();
      console.log(data);
    }
    getData();
  });

  return (
    <AppProvider>
      <article className={styles.article}>
        <header className={styles.header}>
          <nav>
            <PageNumbers />
          </nav>
        </header>
        <main className={styles.main}>
          <Spotmap />
        </main>
        <footer className={styles.footer}>
          &copy; Andy Willis 2021
        </footer>
      </article>
    </AppProvider>
  );
}

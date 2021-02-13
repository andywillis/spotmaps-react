import React, { useEffect, useState } from 'react';
import AppProvider from './store/provider';
import PageNumbers from './components/PageNumbers';
import Spotmap from './components/Spotmap';

import styles from './App.module.css';

export default function App() {

  const [spotmap, setSpotmap] = useState();

  useEffect(() => {
    const extension = 'hex';
    const filename = `Black Hole, The.${extension}`;
    async function getData() {
      const res = await fetch(`/json/${filename}`);
      const data = await res.json();
      setSpotmap(data);
    }
    getData();
  });

  if (!spotmap) return null;

  return (
    <AppProvider>
      <article className={styles.article}>
        <header className={styles.header}>
          <nav>
            <PageNumbers />
          </nav>
        </header>
        <main className={styles.main}>
          <Spotmap data={spotmap} />
        </main>
        <footer className={styles.footer}>
          &copy; Andy Willis 2021
        </footer>
      </article>
    </AppProvider>
  );
}

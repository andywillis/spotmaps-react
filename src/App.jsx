import React, { useEffect, useState } from 'react';
import AppProvider from './store/provider';
import PageNumbers from './components/PageNumbers';
import Spotmap from './components/Spotmap';

import styles from './App.module.css';

export default function App() {

  const [spotmapData, setSpotmapData] = useState();

  useEffect(() => {
    const filename = 'Black Hole, The';
    async function getData() {
      const res = await fetch(`/spotmap/${filename}`);
      const data = await res.json();
      setSpotmapData(data);
    }
    getData();
  }, []);

  if (!spotmapData) return null;

  return (
    <AppProvider>
      <article className={styles.article}>
        <header className={styles.header}>
          <nav>
            <PageNumbers />
          </nav>
        </header>
        <main className={styles.main}>
          <Spotmap data={spotmapData} />
        </main>
        <footer className={styles.footer}>
          &copy; Andy Willis 2021
        </footer>
      </article>
    </AppProvider>
  );
}

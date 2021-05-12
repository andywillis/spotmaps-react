import React, { useContext, useEffect } from 'react';
import PageNumbers from './components/PageNumbers';
import SpotmapList from './components/SpotmapList';

import AppContext from './store/context';

import styles from './App.module.css';

export default function App() {

  const { state, dispatch } = useContext(AppContext);
  const { library } = state;

  useEffect(() => {
    async function getData() {
      const res = await fetch('/library');
      const data = await res.json();
      dispatch({ type: 'saveLibrary', payload: data });
    }
    getData();
  }, [dispatch]);

  if (!Object.keys(library).length) return <div />;

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        Spotmaps Redux
      </header>
      <main className={styles.main}>
        <nav>
          <PageNumbers />
        </nav>
        <SpotmapList />
        <nav>
          <PageNumbers />
        </nav>
      </main>
      <footer className={styles.footer}>
        &copy; Andy Willis 2021
      </footer>
    </article>
  );
}

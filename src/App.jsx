import React, { useContext, useEffect, useRef } from 'react';
import PageNumbers from './components/PageNumbers';
import SpotmapList from './components/SpotmapList';

import AppContext from './store/context';

import styles from './App.module.css';

export default function App() {

  const mainRef = useRef(null);
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

  useEffect(() => {
    setTimeout(() => {
      if (mainRef.current) {
        const bound = mainRef.current.getBoundingClientRect();
        dispatch({
          type: 'setMainWidth',
          payload: Math.floor(bound.width)
        });
      }
    }, 1);
  });

  if (!Object.keys(library).length) return 'null';

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        Spotmaps Redux
      </header>
      <main ref={mainRef} className={styles.main}>
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

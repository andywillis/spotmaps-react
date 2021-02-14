import React, { useContext, useEffect } from 'react';
import PageNumbers from './components/PageNumbers';
import SpotmapList from './components/SpotmapList';
// import Spotmap from './components/Spotmap';

import AppContext from './store/context';

import styles from './App.module.css';

export default function App() {

  const { state, dispatch } = useContext(AppContext);

  // const [spotmapData, setSpotmapData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch('/library');
      const library = await res.json();
      dispatch({ type: 'saveConfig', payload: library });
    }
    getData();
  }, [dispatch]);

  // useEffect(() => {
  //   const filename = 'Black Hole, The';
  //   async function getData() {
  //     const res = await fetch(`/spotmap/${filename}`);
  //     const data = await res.json();
  //     setSpotmapData(data);
  //   }
  //   getData();
  // }, []);

  if (!Object.keys(state).length) return null;

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <nav>
          <PageNumbers />
        </nav>
      </header>
      <main className={styles.main}>
        <SpotmapList />
        {/* <Spotmap data={spotmapData} /> */}
      </main>
      <footer className={styles.footer}>
        &copy; Andy Willis 2021
      </footer>
    </article>
  );
}

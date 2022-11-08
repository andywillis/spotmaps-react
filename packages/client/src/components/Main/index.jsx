import { Routes, Route } from 'react-router-dom';

import About from '../About';
import List from '../List';
import PageNumbers from '../PageNumbers';
import SpotmapList from '../SpotmapList';

import styles from './index.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/directors" element={<List group="directors" type="director" />} />
        <Route path="/genres" element={<List group="genres" type="genre" />} />
        <Route path="/titles" element={<List group="titles" type="title" />} />
        <Route path="/writers" element={<List group="writers" type="writer" />} />
        <Route path="/years" element={<List group="years" type="year" />} />
        <Route path="/:path/:value" element={<SpotmapList />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={(
            <>
              <nav>
                <PageNumbers />
              </nav>
              <SpotmapList />
              <nav>
                <PageNumbers />
              </nav>
            </>
          )}
        />
      </Routes>
    </main>
  );
}

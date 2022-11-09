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
        <Route path="/director" element={<List type="director" />} />
        <Route path="/genre" element={<List type="genre" />} />
        <Route path="/title" element={<List type="title" />} />
        <Route path="/writer" element={<List type="writer" />} />
        <Route path="/year" element={<List type="year" />} />
        <Route path="/:path/:value" element={<SpotmapList />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={(
            <>
              <PageNumbers />
              <SpotmapList />
              {/* <PageNumbers /> */}
            </>
          )}
        />
      </Routes>
    </main>
  );
}

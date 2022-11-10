import { Routes, Route } from 'react-router-dom';

import About from '../About';
import List from '../List';
import SpotmapList from '../SpotmapList';

import styles from './index.module.css';

/**
 * Main
 *
 * @return {object} JSX
 */
function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<SpotmapList />} />
        <Route path="/:type/:value" element={<SpotmapList />} />
        <Route path="/director" element={<List type="director" />} />
        <Route path="/genre" element={<List type="genre" />} />
        <Route path="/title" element={<List type="title" />} />
        <Route path="/writer" element={<List type="writer" />} />
        <Route path="/year" element={<List type="year" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default Main;

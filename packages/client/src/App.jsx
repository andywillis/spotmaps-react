import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import {
  libraryAtom,
  filteredLibraryAtom,
  numberOfPagesAtom
} from './store/atoms';

import styles from './App.module.css';

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  const setLibrary = useSetRecoilState(libraryAtom);
  const setFilteredLibrary = useSetRecoilState(filteredLibraryAtom);
  const setNumberOfPages = useSetRecoilState(numberOfPagesAtom);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/library');
      const library = await response.json();
      setLibrary(library);
      setFilteredLibrary(library);
      setNumberOfPages(library.length);
    }
    getData();
  }, [ setLibrary, setFilteredLibrary, setNumberOfPages ]);

  return (
    <article className={styles.article}>
      <Header />
      <Main />
      <Footer />
    </article>
  );
}

export default App;

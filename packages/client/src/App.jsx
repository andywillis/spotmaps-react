import { lazy, Suspense, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Main from './components/Main';

import { libraryAtom, numberOfPagesAtom } from './store/atoms';

import styles from './App.module.css';

// const Main = lazy(() => import('./components/Main'));

export default function App() {

  const setLibrary = useSetRecoilState(libraryAtom);
  const setNumberOfPages = useSetRecoilState(numberOfPagesAtom);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/library');
      const library = await response.json();
      setLibrary(library);
      setNumberOfPages(library.length);
    }
    getData();
  }, [ setLibrary, setNumberOfPages ]);

  return (
    <article className={styles.article}>
      <Header />
      {/* <Suspense fallback={<Spinner />}> */}
        <Main />
      {/* </Suspense> */}
      <Footer />
    </article>
  );
}

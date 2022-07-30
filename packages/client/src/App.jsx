import React, { lazy, Suspense, useContext, useEffect } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Spinner from './components/Spinner';

import AppContext from './store/context';

import styles from './App.module.css';

const Main = lazy(() => import('./components/Main'));

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
  }, [ dispatch ]);

  if (!Object.keys(library).length) return <div />;

  return (
    <article className={styles.article}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>
      <Footer />
    </article>
  );
}

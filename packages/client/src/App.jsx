import React, { useContext, useEffect } from 'react';

import { Switch, Route, NavLink } from 'react-router-dom';

import About from './components/About';
import List from './components/List';
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
  }, [ dispatch ]);

  if (!Object.keys(library).length) return <div />;

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <nav className={styles.submenu}>
          <ul>
            <li><NavLink activeClassName={styles.active} exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/directors">Directors</NavLink></li>
            {/* <li><NavLink activeClassName={styles.active} to="/genres">Genres</NavLink></li> */}
            <li><NavLink activeClassName={styles.active} to="/titles">Titles</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/writers">Writers</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/years">Years</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/about">About</NavLink></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route exact path="/directors"><List group="directors" type="director" /></Route>
          <Route exact path="/genres"><List group="genres" type="genre" /></Route>
          <Route exact path="/titles"><List group="titles" type="title" /></Route>
          <Route exact path="/writers"><List group="writers" type="writer" /></Route>
          <Route exact path="/years"><List group="years" type="year" /></Route>
          <Route exact path="/:path/:value"><SpotmapList /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/">
            <nav>
              <PageNumbers />
            </nav>
            <SpotmapList />
            <nav>
              <PageNumbers />
            </nav>
          </Route>
        </Switch>
      </main>
      <footer className={styles.footer}>
        &copy; Andy Willis {new Date().getFullYear()}
      </footer>
    </article>
  );
}

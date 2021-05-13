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
  }, [dispatch]);

  if (!Object.keys(library).length) return <div />;

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <nav className={styles.submenu}>
          <ul>
            <li><NavLink activeClassName={styles.active} exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/directors">Directors</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/genres">Genres</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/titles">Titles</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/writers">Writers</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/years">Years</NavLink></li>
            <li><NavLink activeClassName={styles.active} to="/about">About</NavLink></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/directors"><List type="directors" /></Route>
          <Route path="/genres"><List type="genres" /></Route>
          <Route path="/titles"><List type="titles" /></Route>
          <Route path="/writers"><List type="writers" /></Route>
          <Route path="/years"><List type="years" /></Route>
          <Route path="/">
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
        &copy; Andy Willis 2021
      </footer>
    </article>
  );
}

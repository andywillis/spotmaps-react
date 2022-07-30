import { Switch, Route } from 'react-router-dom';

import About from '../About';
import List from '../List';
import PageNumbers from '../PageNumbers';
import SpotmapList from '../SpotmapList';

import styles from './index.module.css';

export default function Main() {
  return (
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
  );
}

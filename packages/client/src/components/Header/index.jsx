import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

export default function Footer() {
  return (
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
  );
}

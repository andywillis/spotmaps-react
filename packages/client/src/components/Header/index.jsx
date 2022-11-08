import { NavLink } from 'react-router-dom';

import style from './index.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.submenu}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? style.active : null}
              end
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/directors"
              className={({ isActive }) => isActive ? style.active : null}
            >Directors
            </NavLink>
          </li>
          {/* <li><NavLink activeClassName={styles.active} to="/genres">Genres</NavLink></li> */}
          <li>
            <NavLink
              to="/titles"
              className={({ isActive }) => isActive ? style.active : null}
            >Titles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/writers"
              className={({ isActive }) => isActive ? style.active : null}
            >Writers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/years"
              className={({ isActive }) => isActive ? style.active : null}
            >Years
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? style.active : null}
            >About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

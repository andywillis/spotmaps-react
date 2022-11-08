/* eslint-disable no-confusing-arrow */
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
              className={({ isActive }) => isActive ? style.active : undefined}
              end
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/directors"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Directors
            </NavLink>
          </li>
          {/* <li><NavLink activeClassName={styles.active} to="/genres">Genres</NavLink></li> */}
          <li>
            <NavLink
              to="/titles"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Titles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/writers"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Writers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/years"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Years
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? style.active : undefined}
            >About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

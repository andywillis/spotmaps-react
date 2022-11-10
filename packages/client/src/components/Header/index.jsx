/* eslint-disable no-confusing-arrow */
import { NavLink } from 'react-router-dom';

import style from './index.module.css';

/**
 * Header
 *
 * @return {object} JSX
 */
function Header() {
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
              to="/director"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Director
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? style.active : undefined}
              to="/genre"
            >Genre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/title"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Title
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/writer"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Writer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/year"
              className={({ isActive }) => isActive ? style.active : undefined}
            >Year
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

export default Header;

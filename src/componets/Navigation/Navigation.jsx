import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
function Nav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li><NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink></li>
        <li><NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink> </li>
        <li><NavLink to='#!'>News</NavLink> </li>
        <li><NavLink to='#!'>Music</NavLink> </li>
        <li><NavLink to='#!'>Settings</NavLink> </li>
      </ul>
    </nav>
  )
}

export default Nav;
import s from './Navigation.module.css';
function Nav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li><a href='/Profile'>Profile</a></li>
        <li><a href='/Dialogs'>Messages</a></li>
        <li><a href='#!'>News</a></li>
        <li><a href='#!'>Music</a></li>
        <li><a href='#!'>Settings</a></li>
      </ul>
    </nav>
  )
}

export default Nav;
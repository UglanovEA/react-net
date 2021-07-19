import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(props) {
  return (
    <header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/240px-American_Broadcasting_Company_Logo.svg.png' alt="logo" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;
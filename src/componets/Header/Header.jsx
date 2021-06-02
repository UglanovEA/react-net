import s from './Header.module.css';
function Header() {
  return (
    <header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/240px-American_Broadcasting_Company_Logo.svg.png' alt="logo" />
    </header>
  )
}

export default Header;
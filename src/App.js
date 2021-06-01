import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/American_Broadcasting_Company_Logo.svg/240px-American_Broadcasting_Company_Logo.svg.png' />
      </header>
      <nav className='nav'>
        <ul>
          <li><a href='#!'>Profile</a></li>
          <li><a href='#!'>Messages</a></li>
          <li><a href='#!'>News</a></li>
          <li><a href='#!'>Music</a></li>
          <li><a href='#!'>Settings</a></li>
        </ul>
      </nav>
      <div className='content'>
        <div>
          <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'>
          </img>
        </div>
      </div>
      <div>
        <img src=''></img>
      </div>
    </div>
  );
}
export default App;

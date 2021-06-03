
import './App.css';
import Header from './componets/Header/Header.jsx';
import Nav from './componets/Navigation/Navigation.jsx';
import Profile from './componets/Profile/Profile.jsx';
import Dialogs from './componets/Dialogs/Dialogs.jsx';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div class='app-wrapper-content'>
        {/* <Dialogs /> */}

      </div>

      {/* <Profile /> */}

    </div>
  );
}
export default App;

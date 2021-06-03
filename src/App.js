
import './App.css';
import Header from './componets/Header/Header.jsx';
import Nav from './componets/Navigation/Navigation.jsx';
import Profile from './componets/Profile/Profile.jsx';
import Dialogs from './componets/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div class='app-wrapper-content'>
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/Profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

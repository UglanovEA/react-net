
import './App.css';
import Header from './componets/Header/Header.jsx';
import Nav from './componets/Navigation/Navigation.jsx';
import Profile from './componets/Profile/Profile.jsx';
import { Route } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/Dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/Profile'
          render={() => <Profile />}
        />
      </div>
    </div>
  );
}
export default App;

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

        {/* <Route path='/Dialogs' component={Dialogs} />
          <Route path='/Profile' component={Profile} /> */}

        <Route path='/Dialogs'
          render={() => <DialogsContainer store={props.store} />} />
        <Route path='/Profile'
          render={() => <Profile
            store={props.store}
          />}
        />
      </div>
    </div>
  );
}
export default App;
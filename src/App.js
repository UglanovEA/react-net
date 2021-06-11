
import './App.css';
import Header from './componets/Header/Header.jsx';
import Nav from './componets/Navigation/Navigation.jsx';
import Profile from './componets/Profile/Profile.jsx';
import Dialogs from './componets/Dialogs/Dialogs.jsx';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>

        {/* <Route path='/Dialogs' component={Dialogs} />
          <Route path='/Profile' component={Profile} /> */}

        <Route path='/Dialogs'
          render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/Profile'
          render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />}
        />
      </div>
    </div>
  );
}
export default App;
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

function Profile(props) {


  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  )
}

export default Profile;
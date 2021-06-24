import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

function Profile(props) {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      // posts={props.profilePage.posts}
      // newPostText={props.profilePage.newPostText}
      // dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;
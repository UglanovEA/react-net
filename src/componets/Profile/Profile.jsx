import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt="profile-img">
        </img>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
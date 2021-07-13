import Preloader from '../../Common/Preloader/preloader';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt="profile-img">
        </img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""></img>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
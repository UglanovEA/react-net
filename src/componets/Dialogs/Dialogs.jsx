import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Иван</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Андрей</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Саша</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Сергей</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>i am fine</div>
      </div>
    </div>
  )
}

export default Dialogs;
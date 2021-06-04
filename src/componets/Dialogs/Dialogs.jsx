import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
    </div>
  )
};

function Message(props) {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Иван" id="1" />
        <DialogItem name="Андрей" id="2" />
        <DialogItem name="Сергей" id="3" />
        <DialogItem name="Антон" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Hey" />
        <Message message="How are you" />
        <Message message="i am fine" />
      </div>
    </div>
  )
}

export default Dialogs;
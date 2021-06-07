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
  let dialogsData = [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Андрей' },
    { id: 3, name: 'Сергей' },
    { id: 4, name: 'Антон' },
  ]
  let messagesData = [
    { id: 1, message: "Hey" },
    { id: 2, message: "How are you" },
    { id: 3, message: "i am fine" },
    { id: 4, message: "And you?" },
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  )
}

export default Dialogs;
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {

  let dialogs = [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Андрей' },
    { id: 3, name: 'Сергей' },
    { id: 4, name: 'Антон' },
  ]

  let messages = [
    { id: 1, message: "Hey" },
    { id: 2, message: "How are you" },
    { id: 3, message: "i am fine" },
    { id: 4, message: "And you?" },
  ]
  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
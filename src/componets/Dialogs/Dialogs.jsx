import s from './Dialogs.module.css';
function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Иван</div>
        <div className={s.dialog}>Андрей</div>
        <div className={s.dialog}>Саша</div>
        <div className={s.dialog}>Сергей</div>
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
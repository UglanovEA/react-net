import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './../Dialogs/Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer;
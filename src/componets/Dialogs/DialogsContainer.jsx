import Dialogs from './../Dialogs/Dialogs';
import storeContext from '../../storeContext';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

function DialogsContainer() {

  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator())
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body))
        }
        return <Dialogs
          updateNewMessageBody={onNewMessageChange}
          sendMessage={onSendMessageClick}
          dialogsPage={state}
        />
      }}
    </storeContext.Consumer>
  )
}

export default DialogsContainer;
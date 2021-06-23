const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Андрей' },
    { id: 3, name: 'Сергей' },
    { id: 4, name: 'Антон' },
  ],
  messages: [
    { id: 1, message: "Hey" },
    { id: 2, message: "How are you" },
    { id: 3, message: "i am fine" },
    { id: 4, message: "And you?" },
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body })
      return state;
    default:
      return state;
  }
}
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default dialogsReducer;
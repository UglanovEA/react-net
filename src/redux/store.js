import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi, how are you', likesCount: 12 },
        { id: 2, message: 'it\'s my post', likesCount: 15 },
      ],
      newPostText: 'hello'
    },
    dialogsPage: {
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
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
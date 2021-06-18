const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export default store;
window.store = store;
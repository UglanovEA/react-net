import { rerenderEntireTree } from "../render";

let state = {
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
}

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ""
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
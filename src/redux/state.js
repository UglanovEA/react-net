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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost)
}

export default state;
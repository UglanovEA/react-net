let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'hi, how are you', likesCount: 12 },
      { id: 2, message: 'it\'s my post', likesCount: 15 },
    ]

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

export default state;
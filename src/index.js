import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'hi, how are you', likesCount: 12 },
  { id: 2, message: 'it\'s my post', likesCount: 15 },
]
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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import storeContext from '../../../storeContext';

function MyPostsContainer() {

  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          let action = updateNewPostActionCreator(text);
          store.dispatch(action)
        }
        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />
      }}
    </storeContext.Consumer>
  )
}

export default MyPostsContainer;
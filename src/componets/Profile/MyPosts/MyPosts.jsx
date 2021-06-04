import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts() {
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}> My posts
      <Post message='hi, how are you' likesCount='44' />
        <Post message='it"s my post' likesCount='20' />
      </div>
    </div>
  )
}

export default MyPosts;
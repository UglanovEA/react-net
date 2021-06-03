import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts() {
  return (
    <div className={s.posts}> My posts
      <Post message='hi, how are you' />
      <Post message='it"s my post' />
    </div>
  )
}

export default MyPosts;
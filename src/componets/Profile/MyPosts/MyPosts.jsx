import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts() {
  return (
    <div className={s.posts}> My posts
      <Post message='hi, how are you' likesCount='44' />
      <Post message='it"s my post' likesCount='20' />
    </div>
  )
}

export default MyPosts;
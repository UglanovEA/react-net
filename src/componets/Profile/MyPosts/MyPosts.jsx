import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts() {
  return (
    <div className={s.posts}> My posts
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts;
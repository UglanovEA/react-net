import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts(props) {
  let postData = [
    { id: 1, message: 'hi, how are you', likesCount: 12 },
    { id: 2, message: 'it\'s my post', likesCount: 15 },
  ]
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts;
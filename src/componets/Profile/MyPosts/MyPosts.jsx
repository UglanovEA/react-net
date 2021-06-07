import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts(props) {
  let posts = [
    { id: 1, message: 'hi, how are you', likesCount: 12 },
    { id: 2, message: 'it\'s my post', likesCount: 15 },
  ]

  let postsElements = posts.map(p => (<Post message={p.message} likesCount={p.likesCount} />))

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
import s from './Post.module.css';
function Post() {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" alt='avatar'></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;
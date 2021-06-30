import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
      { id: 2, photoUrl: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Ivan', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, photoUrl: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: false, fullName: 'Pert', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
      { id: 4, photoUrl: 'https://img.icons8.com/bubbles/2x/user-male.png', followed: true, fullName: 'Leha', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } }
    ])
  }
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt='' className={styles.userPhoto} />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>
            }
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;
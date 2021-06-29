const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // { id: 1, followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
    // { id: 2, followed: true, fullName: 'Ivan', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
    // { id: 3, followed: false, fullName: 'Pert', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
    // { id: 4, followed: true, fullName: 'Leha', status: 'I am boss', location: { city: 'Moscow', country: 'Russia' } },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}
export const followActionCreator = (userId) => ({
  type: FOLLOW, userId
})
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW, userId
})
export const setUserActionCreator = (users) => ({
  type: SET_USERS, users
})
export default usersReducer;